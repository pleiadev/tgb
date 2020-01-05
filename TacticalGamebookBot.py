# TacticalGamebookBot.py
#
# This file has routines for the manipulation of Tactical Gamebook Bot files. 
# A sample file is located at tests/TacticalGamebookTemplate.txt
#
# The following is a summary of the format:
#
#    title: Name of Bot 
#    author: Who designed the bot
#    date: date bot was designed yyyy-mm-dd
#    offsetx: integer x offset for the map grid
#    offsety: integer x offset for the mapd grid
#    map: name of the map associated with the bot. 
#    
#    # Comments begin with the sharp character
#    #
#    # the following is 15x17 map with details of the bot
#    # It is a single letter encoding for the bots logic
#    #
#    # This is a bit of work in progress
#    #
#    # Legend
#    # X - Is a don't care. Placed in any unused square. Could be terrain
#    # C - Denotes an activation check square (forks two outcomes)
#    # P - Denotes a pilot check square (forks two outcomes)
#    # A - Denotes an unit activation square
#    # E - Denotes an Event
#    # S - Denotes a sighting check 
#    # M - Denotes a unit move location
#    # C - Clear Hex
#    # V - Light Woods
#    # W - Heavy Woods
#    
#    # A bots map may or may not have the coordinate labels.
#    
#    #  000000000111111
#    #  123456789012345
#    #  abcdefghijklmno
#    
#    01 CCCCCCCCCCCCCCC 01
#    02 CCCCCCCCCCCCCCC 02
#    03 CCVVWVCCCCCCCCC 03
#    04 CCCCVCCCCCCCCCC 04
#    05 CCCCWCCCCCCCCWC 05
#    06 CCCCCCCCCVVCCCC 06
#    07 CCVVCCCCCVWVCCC 07
#    08 CCWVCCCCCCCCCCC 08
#    09 CCCCCCCCCCWCCCC 09
#    10 CCCCCCCCCCCCCCC 10
#    11 CCCCCCCCCCCCCCC 11
#    12 CVVCCCCCCCCCCVC 12
#    13 CCCCCCCCWCCCVCC 13
#    14 CCCCCCVVCCVVWVC 14
#    15 CCCCCCCCCCVCWCC 15
#    16 CCCCCCCCCCCCCCC 16
#    17 CCCCCCCCCCCCCCC 17
#    
#    #  000000000111111
#    #  123456789012345
#    #  abcdefghijklmno
#    
#    # Action descriptions for the bots.
#    # Format is single letter label for the action type such as A,S, or U. Followed by
#    # a two digit x,y coordinate ont the game map for where the action takes place. There
#    # can be multiple actions one a map spaces. For example a Piloting Check, Activation
#    # Check, or Unit Behavior. Piloting and Activation checks are may by the player. 
#    # Unit Behaviors are steps the AI Bot should perform if an AI unit is present. 
#    #
#    # Action text is written in Markdown format.
#    
#    A0101. Action Check (+4)? S16 : None
#    S1315 [s1] Player hears birds to the North.
#    U0106.1 Unit 14 spawns at hex 1,6.
#    U0106.2 If s1 enter hex 4,9.
#    U0409.1 If Bot present and s1 fire on any unit within 3 hexes of 13,15
#    S0106 [s1] A flare appears overhead illuminating the area around you.
#    P0104 Pilot Check (+3) ? P0104.2 : P0104.3
#    P0104.2 A soldier reports a tank seen in the direction of hex 5,12.
#    P0104.3 Must have been the wind.
#    U0503 Activate unit 3 in hex 5,13.
#    A0205 Activation Check (+2) ? A0205.2 : A0205.3
#    A0205.2 Activate unit 3 in hex 5.13. Unit 3 advantage x2 turns.
#    A0205.3 Activate unit 3 in hex 5,13. Player advantage x2 turns.
#    U1012.5 If unit 10 has no line of sight on player units. Clear s1 and take unit 10 off the map. You've lost track of it.
#      
# Uses
#    There are several modes the gamebook file could be used store information as follows:
#       1. Solo Mode. As described above the bot mode could be used to generate operation of bots
#           for scenario driven play. The bots when designed could allow for small variation in 
#           placement, joining of multiple bot files into a single bot scenario, and testing of
#           bot scenario conflicts such as placing multiple units in same hexes. 
#       2. Player vs Player Mode. The gamebook format could be used to track a play by email 
#           game between two players using a compressed chess like notation. In this format 
#           the game state is tracked but it is up to the players to determine how combat is 
#           resolved. The file can be emailed between players.
#       3. Editing Mode. The gamebooks are akin to individual bots to be merged together into
#           a scenario. The inspiration Ambush game merged some eight scenarios into one 
#           map template which provides some obfuscation in the paragraph book. The scenarios
#           could have a number of differences. Requires the ablity to generate the pharagraph
#           book and the move or position substitution look up tables. 

import sys
import argparse
import logging
import re
from pprint import pprint

DESC = 'Ambush! like scenario generator'

PARSER_HEADERS = 1
PARSER_MAP = 2
PARSER_ACTIONS = 3
PARSER_FINISHED = 4
PARSER_SECTION_DELIMITERS = 2
PARSER_SECTION_DELIMITER = '\n'


class TacticalGamebookFileParserState:
    def __init__(self):
        self.state = PARSER_HEADERS
        self.blanklines = 0
        self.section = PARSER_HEADERS
        self.mapx = 0
        self.mapy = 0
        self.mapline = 0
        self.actionline = 0
        
    # switch sections when '\n\n' detected
    def section_update(self):

        logging.debug("state %d %d" % (self.blanklines, self.state))

        # line has non whitespace content, check section transitions
        if PARSER_SECTION_DELIMITERS <= self.blanklines:
            if (PARSER_HEADERS == self.state):
                logging.debug("state1 %d %d %d" % (self.blanklines, self.state, PARSER_MAP))
                self.state = PARSER_MAP
                self.blanklines = 0
            elif (PARSER_MAP == self.state):
                logging.debug("state2 %d %d %d" % (self.blanklines, self.state, PARSER_ACTIONS))
                self.state = PARSER_ACTIONS
                self.blanklines = 0
            elif (PARSER_ACTIONS == self.state):
                logging.debug("state3 %d %d %d" % (self.blanklines, self.state, PARSER_FINISHED))
                self.state = PARSER_FINISHED
                self.blanklines = 0
            else:
                raise Exception("Invalid file parser state")
        else:
            # line has non whitespace, reset blank line count
            logging.debug("clear %d %d %d" % (self.blanklines, self.state, PARSER_FINISHED))
            
            logging.debug("state4 %d %d %d" % (self.blanklines, self.state, 0))
            self.blanklines = 0


class TacticalGamebookFile:
    def __init__(self, contents=None, filename=None):
        self.filename = filename

        # key value pairs such as title, author, date, map, offsetx, offsety
        self.headers = {}
        # a list of strings representing the gameboard. Relative to the offsets
        self.map = {}
        # a list of the map, scenario, or AI bot behavior
        self.actions = {}
        # notes
        self.notes = []
        
        # corrections
        self.corrections = {}
        # 
        self.map_references = {}
        
        if None != contents:
            self.parse_tg(contents)
        pass

    def isPBEM(self):
        if "actions" in self.headers and "pbem" == self.headers['actions'].lower():
            return True
        return False
       
    def isSolo(self):
        if "actions" in self.headers and "solo" == self.headers['actions'].lower():
            return True
        return False

    # process headers when new header pair detected
    def header_append(self, t, v):
        self.headers[t] = v
        

    # append the action to the action list, if entry already exists then append as 
    # contingent / subaction e.g. a x.1, x.2, x.3 etc 
    # 
    def action_append(self, t, v):
        # calculate next subaction index
        i = 0
        a = None
        
        # format tag name
        if ".0" == t[-2:]: 
            a = t[:-2]
        elif "." == t[-1:]: 
            a = t[:-1]
        elif '.' in t:
            a, sa = t.split('.')
            i = int(sa)
        else:
            a = t

        while "%s.%d" % (a,i) in self.actions:
            i = i + 1

        # format normalized key
        k = "%s.%d" % (a,i)
        # store action, note the value may reference non-normalized action names later in the file
        self.actions[ k ] = v
        # store mapping of action to the normalized action name for later replacement
        self.corrections[ t ] = k

    def parse_tg_headers(self, state, line):
        logging.debug("hdr %s " % (line))
        if ":" in line:
            k,v = line.split(':', 1)
            
            kk = k.strip().lower()
            self.header_append(kk, v.strip())
        else:
            pass

    def parser_tg_map_bookend(self, be):
        s = ""
        n = -1
        
        try:
            s = be
            n = int(be)
        except ValueError:
            pass
        
        return (s,n)

    def parser_tg_map(self, state, line):
        #print("map %s " % (line))

        l = line.strip()
        if 4 > len(l):
            raise Exception("Map row is less than 5 spaces!")
        
        # look at line ends to see if they are row numbers, grab whitespace
        s1, n1 = self.parser_tg_map_bookend(l[:3])
        s2, n2 = self.parser_tg_map_bookend(l[len(l)-3:])
        # row numbering may be zero or one based or not present

        # evaluate map start position
        if (n1 == state.mapline or n1 == state.mapline + 1):
            n1 = 3
        elif -1 == n1:
            n1 = 0
        else:
            raise Exception("Invalid characters %s in map row %d" % (s1, state.mapline))

        # evaulate map stop position            
        if (n2 == state.mapline or n2 == state.mapline + 1):
            n2 = len(l) - len(s2)
        elif -1 == n2:
            n2 = len(l)
        else:
            raise Exception("Invalid characters in map row %d" % state.mapline)

        # extract map 
        map = l[n1:n2].strip()

        #print("bookends %d len(l)=%d b=%s(%d) e=%s(%d) map[%dx%d]=%s" % (state.mapline, len(l), s1, n1, s2, n2, state.mapx, state.mapy, map))

        # sanity check map attributes
        ml = len(map)
        if 0 == state.mapx:
            state.mapx = ml
        elif state.mapx != ml:
            raise Exception("Map %s length %d for map row %d invalid for %d size map." % (map, ml, state.mapline, state.mapx))  

        # save the row in the map
        self.map[ state.mapline ] = (map, (state.mapx, state.mapy))

        # map headers might conflict with map rows
        state.mapy = state.mapy + 1
        state.mapline = state.mapline + 1
    
    
    # todo how to handle pbem turn notation repeated 1. 1. 1. 1. 
    def parser_tg_actions(self, state, line):
        logging.info("action %s " % (line))
        
        grid, logic = line.split(' ', 1)
        logging.info("%s : %s" %(grid, logic))
        
        # save the bot logic, very little error checking during loading
        self.action_append(grid, logic)
        
    def parse_tg_comments(self, state, line):
        # skip comments in the map section, they are likely the legend
        if PARSER_MAP == state.state:
            return
    
        self.notes.append("%s\n" % (line[2:].strip()))

    def parser_tg_finished(self, state, line):
    
        # record the map dimensions
        self.headers["dx"] = state.mapx
        self.headers["dy"] = state.mapy
        pass
        
    def parse(self, contents):
        state = TacticalGamebookFileParserState()

        switches = {}
        switches[PARSER_HEADERS] = self.parse_tg_headers
        switches[PARSER_MAP] = self.parser_tg_map
        switches[PARSER_ACTIONS] = self.parser_tg_actions
        switches[PARSER_FINISHED] = self.parser_tg_finished
        
        for rl in contents.splitlines():
            line = rl.strip()
            logging.debug(line)

            # handle blank lines
            if not line:
                state.blanklines = state.blanklines + 1
                continue
            else:
                state.section_update()
            
            # handle comments
            if ('#' == line[0] or ';' == line[0]):
                state.blanklines = 0
                self.parse_tg_comments(state, line)
                continue

            #print(line)
            sub = switches[state.state]
            sub(state, line)
              
        # after reading gamebook, 
        self.parser_tg_sanity_check(state)


    def normalized_map_ref(self, x, y):
        return "h%02d%02d" % (x, y)

    # examine action text and map location references
    # todo should 'hexes of' be detect for x,y  check meaning
    def validate_location_scan(self, a):
        logging.debug("processing %s" % (a))
        
        scans = []
        scans.append("hex(?:es of)? (\d{1,2})[, ]+(\d{1,2})")
        scans.append("[hH](\d{1,2})[, ]?(\d{1,2})")
        
        action = self.actions[a]
        normalized = ""
        
        i = 0
        y = 0
        for s in scans:
            i = i + 1
            for m in re.finditer(s, action):
                location = "H%02d%02d" % (int(m.group(1)), int(m.group(2)))
                logging.debug("match %d %s loc=%s for x=%s y=%s match=%s (%d,%d)" % (i, a, location, m.group(1), m.group(2), m.group(0), m.start(0), m.end(0)))
                
                normalized = normalized + action[y:m.start(0)]
                normalized = normalized + "".join(self.normalized_map_ref(int(m.group(1)), int(m.group(2))))
                y = m.end(0)
                
        normalized = normalized + action[y:]
        
        # check action syntax 
        if (action != normalized):
            # perform fix up
            logging.info("location fixup:\n\t%s\n\t%s" % (action, normalized))
            self.actions[a] = normalized
        
    # run through the action text and build a map of hex locations
    def validate_actions(self):
        logging.debug("validating actions")

        for a in self.actions:
            self.validate_location_scan(a)
        
    def parser_tg_sanity_check(self, state):
        logging.debug("petforming sanity checks")
        # perform snity checks
        
        self.validate_actions()
        
        
        
        # check that all the action reference exist within the bot
        # check that all the action map reference exist on the map
        # generate a map of the story forks
        # generate a list of the spaces where the bot movesment
        # generate a list  of the bot spawn locations, activation locations
        # generate a list of the activation checks
        # generate a list of the pilot checks
        # generate a list of the sightings
        # sightings, events, units, movement, checks can all be thought of as various planes with connection points
        # merge two different bots into one bot
        # remove a bot from a 
        # generate a substitution grid
        #
        # work on feature that enable play by email, etg remote games
        pass

    def validate(self):
        pass
        
    def read(self, fd):
        self.parse(fd.read())

    def write(self, fd):
        
        for i in self.headers.items():
            fd.write("%s: %s\n" % (i[0], i[1]))
        
        fd.write("\n\n")
        
        # look up the map size 
        dx = len(self.map[0][0])

        t = []
        o = []
        l = []
        for i in range(1, dx+1):
            t.append("%d" % ((i / 10)))
            o.append("%d" % ((i % 10)))
            if i > 26:
                raise exception("The map is larger than the alphabet. What is the plan here 'aa'? ")
            l.append("%s" % (chr(ord('`') + i)))

        # write map coordinates
        fd.write("#  %s\n" % ("".join(t)))
        fd.write("#  %s\n" % ("".join(o)))
        fd.write("#  %s\n" % ("".join(l)))
        fd.write("\n")
        
        for i in self.map.items():
            fd.write("%02d %s %02d\n" % (i[0]+1, i[1][0], i[0]+1))

        # write map coordinates
        fd.write("\n")
        fd.write("#  %s\n" % ("".join(t)))
        fd.write("#  %s\n" % ("".join(o)))
        fd.write("#  %s\n" % ("".join(l)))

        fd.write("\n\n")

        for i in self.actions.items():
            fd.write("%s %s\n" % (i[0], i[1]))

        fd.write("\n\n")

        for i in self.notes:
            fd.write("# %s" % (i))

        fd.write("\n\n")

        # a list of the map, scenario, or AI bot behavior
        self.actions = {}
        # notes
        self.notes = []  
    
        

class para:
    def __init__(self, text, **kwargs):

        self.text = text
        self.events = None
        self.sightings = None
        self.condtions = None
        self.units = None
        self.forks = None

        for n,v in kwargs.items():
            if 'events' == n:
                self.events = v
            elif 'sightings' == n:
                self.sightings = v
            elif 'condtions' == n:
                self.condtions = v
            elif 'units' == n:
                self.units = v
            elif 'forks' == n:
                self.forks = v


class unit:
    def __init__(self, name, model, actions=None):
        
        self.name = name
        self.model = model
        self.actions = []
        if None != actions:
            self.add_actions(actions)

    def add_action(self, obj, text):
        if isinstance(obj, para):
            self.actions.append((obj, text))
        else:
            raise Exception("Unsupport action type %s" % type(obj))
    def add_action(self, actions):
        for f in actions:
            self.add_action(f[0], f[1])
    

class forks:
    def __init__(self, numbered=False, forks=None):
        self.numbered = numbered
        self.forks = []
        if None != forks:
            self.add_forks(forks)
    
    def add_fork(self, obj, text):
        if isinstance(obj, para):
            self.forks.append((obj, text))
        else:
            raise Exception("Unsupport fork type %s" % type(obj))
    def add_forks(self, forks):
        for f in forks:
            self.add_fork(f[0], f[1])

class event:    
    def __init__(self):
        pass

class sighting:
    def __init__(self):
        pass


def unittest():
    pass

#
# usage: python TacticalGamebookBot.py --input tests\TacticalGamebookTemplate.txt
# 
def main(argv):
    parser = argparse.ArgumentParser(description=DESC)
    #parser.add_argument('-?', '--help', type=bool, help='Print help text')
    parser.add_argument('-i', '--input', type=str, help='scenario filename')
    parser.add_argument('--pbem', type=str, help='pbem file format')
    verbosityChoices = [logging.NOTSET, logging.DEBUG, logging.INFO, logging.WARNING ]
    parser.add_argument('-V', '--verbosity', type=int, choices=verbosityChoices, help='increase output verbose level')
    args = parser.parse_args(argv)
    if None != args.verbosity:
        pprint(args)
        logging.getLogger().setLevel(args.verbosity)

    gb = TacticalGamebookFile()
    
    gb.parse( open(args.input, 'r', encoding="utf-8").read())

    pprint(gb.headers)
    pprint(gb.map)
    pprint(gb.actions)
    #pprint(gb.notes)

    gb.write( open("test.tg", 'w', encoding="utf-8") )


    unittest()


if __name__ == "__main__":
    main(sys.argv[1:])