kaboom({
    global:true,
    fullscreen:true,
    scale: 1.3,
    debug:true, 
    clearColor: [0,0,0,1,],
})


loadSprite('block', 'https://raw.githubusercontent.com/Deyo9/Mario/main/block.png')
loadSprite('brick', 'https://raw.githubusercontent.com/Deyo9/Mario/main/brick.png')
loadSprite('coin', 'https://raw.githubusercontent.com/Deyo9/Mario/main/coin.png')
loadSprite('goomba', 'https://raw.githubusercontent.com/Deyo9/Mario/main/goomba.png')
loadSprite('goomba1', 'https://raw.githubusercontent.com/Deyo9/Mario/main/goomba.png')
loadSprite('hitblock', 'https://raw.githubusercontent.com/Deyo9/Mario/main/hitblock.png')
loadSprite('mario', 'https://raw.githubusercontent.com/Deyo9/Mario/main/mario.png')
loadSprite('mushroom', 'https://raw.githubusercontent.com/Deyo9/Mario/main/mushroom.png')
loadSprite('pipebl', 'https://raw.githubusercontent.com/Deyo9/Mario/main/pipebl.png')
loadSprite('pipebr', 'https://raw.githubusercontent.com/Deyo9/Mario/main/pipebr.png')
loadSprite('pipetl', 'https://raw.githubusercontent.com/Deyo9/Mario/main/pipetl.png')
loadSprite('pipetr', 'https://raw.githubusercontent.com/Deyo9/Mario/main/pipetr.png')
loadSprite('qblock', 'https://raw.githubusercontent.com/Deyo9/Mario/main/qblock.png')
loadSprite('dirt','https://raw.githubusercontent.com/Deyo9/Mario/main/dirt.png')
loadSprite('tree', 'https://raw.githubusercontent.com/Deyo9/Mario/main/tree.png')
loadSprite('redguy', 'https://raw.githubusercontent.com/Deyo9/Mario/main/redguy.png')
loadSprite('invizb', 'invizb.png')
loadSprite('sandb', 'https://raw.githubusercontent.com/Deyo9/Mario/main/sandblock.png')
loadSprite('sands', 'https://raw.githubusercontent.com/Deyo9/Mario/main/sandstone.png')
loadSprite('cloudg', 'https://raw.githubusercontent.com/Deyo9/Mario/main/cloudgreen.png')
loadSprite('cloud', 'https://raw.githubusercontent.com/Deyo9/Mario/main/cloud.png')
loadSprite('cactus', 'https://raw.githubusercontent.com/Deyo9/Mario/main/cactus.png')
loadSprite('jumper', 'https://raw.githubusercontent.com/Deyo9/Mario/main/jumper.png')
loadSprite('water', 'https://raw.githubusercontent.com/Deyo9/Mario/main/water.png')
loadSprite('dwater', 'https://raw.githubusercontent.com/Deyo9/Mario/main/water2.png') 
loadSprite('road','road.png')
loadSprite('road2','road2.png')
loadSprite('smortgoomba','smortgoomba.png')
loadSprite('treeblock','treeblock.png')
loadSprite('leafblock','leafblock.png')
loadSprite('glassblock','glassblock.png')
loadSprite('buildingblock','buildingblock.png')
loadSprite('flyingguy','flyingguy.png')
loadSprite('cloud2','https://raw.githubusercontent.com/Deyo9/Mario/main/cloud.png')
loadSprite('truck','truck.png')
loadSprite('truck2','truck2.png')
loadSprite('truck3','truck3.png')
loadSprite('suprise','invizb.png')
loadSprite('mario-going-left','mariogoingleft.png')
loadSprite('mario-going-right','mariogoingright.png')
loadSprite('mario-crouching','mariocrouch.png')
loadSprite('mario-party','marioemote1.png')
loadSprite('mario-flex','marioemote2.png')
loadSprite('mario-cowboy','marioemote3.png')
loadSprite('meteor','fireball2.png')
loadSprite('car','cah.png')
loadSprite('portal','portal.png')
loadSprite('virusblock','virusblock.png')
loadSprite('virusblocklava','virusblocklava.png')
loadSprite('lava','lava.png')









scene("game", ({level, score}) => {
   layers(['bg','obj','ui'], 'obj')

   const maps = [      
   
    [
        '                                                                   ',
        '                                                                   ',
        '                                                                   ',
        '                                                                   ',
        '                                                                   ',
        '                                                                   ',
        '                                                                   ',
        '                                                                   ',
        '                                                                   ',
        '                                                                   ',
        '                                                                   ',
        '                                                                   ',
        '                                                                   ',
        '                                                                   ',
        '                                                                   ',
        '                                                                   ',
        '                                                    ž              ',
        '                                                                   ',
        'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM',
        'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
        'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
        'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
        'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
        'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
    ],


    [  '                                                                 ',  
       '                          c                              c       ',
       '   c                                                             ',
       '                                                                 ',
       '             c                         c                         ',
       '                                                                 ',
       '                                                   c             ',
       '     c                                                           ',  
       '                          c                                      ',
       '                                                                 ',
       '        $$$$$$                                                   ',
       '              $                               _     r            ',
       '       €###%###        $$$$$        €##       =                  ',
       '                      $     $                =Ł                  ', 
       '                                            =ŁŁ            -+    ',
       '   t    t     t    !           t     t     =ŁŁŁ   t        ()    ',
       '=======================     ===============ŁŁŁŁ==============    ',
       'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ     ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ    ',
       'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ     ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ    ',
       'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ     ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ    ',
       'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ     ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ    ',
       'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ     ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ    ',
       'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ     ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ    ',
    ],
    [
       '                                     ==                          ',
       '                                     ŁŁ                          ',
       '    c                                ŁŁ       c                  ',
       '                              c      ŁŁ                          ',
       '                     i               ŁŁ                    c     ',
       '                c                    ŁŁ      c     c             ',
       '          $$$                        ŁŁ                          ',
       '                                  r  ŁŁ                          ',
       '  c                 ####             ==          c        c      ',
       '                            c                                    ',
       '        =     =                      $$                       r  ',
       '       =Ł     Ł=         #%#         ==     €##€#                ',
       '      =ŁŁ     ŁŁ=                    ŁŁ                     -+   ',
       '     =ŁŁŁ     ŁŁŁ=    t     j  !  t  ŁŁ    t       t    _   ()   ',
       '=====ŁŁŁŁ     ŁŁŁŁ===================ŁŁ========================= ',
       'ŁŁŁŁŁŁŁŁŁ     ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ ',
       'ŁŁŁŁŁŁŁŁŁ     ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ ',
       'ŁŁŁŁŁŁŁŁŁ     ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ ',
       'ŁŁŁŁŁŁŁŁŁ     ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ ',
       'ŁŁŁŁŁŁŁŁŁ     ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ ',
       'ŁŁŁŁŁŁŁŁŁ     ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ ',
    ],
    [
        '                  c            r                  c              ',
        '      c     =                         c                     c    ',
        '            Ł                                                    ',
        '            Ł                     c                  r           ',
        '            Ł      c                         c                   ',
        '          ==Ł                  $$$$$$                            ',
        '          ŁŁŁ                             ###       c            ',
        '    c       Ł        i       ##########                      _   ',
        '            Ł                                   ####i##########  ',
        '          ==Ł            c                                       ',
        '     c    ŁŁŁ      ##%##       $$$$$$                            ',
        '            Ł$                $      $                       -+  ',
        '  t     t   Ł    t       t              t      t      t   !  ()  ',
        '============Ł===================    =============================',
        'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ    ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ',
        'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ    ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ',
        'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ    ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ',
        'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ    ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ',
        'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ    ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ',
        'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ    ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ',

    ],
    [   '                          S                                      ',
        '                          sS                                     ',
        '            C          $$$ sS           C                   r    ',
        '   C          r             s                                    ',
        '                            s   ##                _ C            ',
        '         C     C            s    C        sssssssssssss          ',
        '                      ##€## sS                                   ',
        '   C                 C      ss                             C     ',
        '              SSS                   S      $ $ $ $ $             ',
        '     %       Ssss                  ss                            ',
        '      H     Ss              H       s                H     -+    ',
        '      H    Ss      H        H       s        !       H  j  ()    ',
        'SSSSSSSSSSSssssssSSSSSSSSSSSSSSSSSSSsSSSSSSSSSSSSSSSSSSSSSSSSSSSS',
        'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
        'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
        'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
        'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
        'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    ],
    [   '                                                                    ',
        '   C                               C                   C            ',
        '                        C                                       C   ',
        '         C                                                          ',
        '                                        C                           ',
        '                 C                                 C                ',
        '      C                        C                             r      ',
        '            C                                                       ',
        '                ss                        C                         ',
        '    C          ssss         C                                       ',
        '              ssssss                                 C          C   ',
        '             s $$$  s               C                               ',
        '            s$     sss                                              ',
        '           sssss     !sj    ###%€##                                 ',
        '          s$       sssss                  S                         ',
        '   H     ssss        $sss               SSs                H      -+',
        '   H                ssssss   $$$$$     Ssss    H      _    H      ()',
        'SSSSSSSSSSSSSSSSSSSSssssssSSSSSSSSSSSSSssssSSSSSSSSSSSSSSSSSSSSSSSSS',
        'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
        'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
        'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
        'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
        'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
        
    ],
    [
        '                                                              C     ',
        '                     C                             C                ',
        '                                          C                         ',
        '       C                       C                           C        ',
        '                                                                    ',
        '                 C                                                  ',
        '                                              C         C           ',
        '      C                                                             ',
        '                                                                    ',
        '                       C            C                      C        ',
        '          C                                                         ',
        '                                                                    ',
        '                                            C                   C   ',
        '      C                    C                                        ', 
        '            $$$$    H        $$$$$                $$$$$$            r                  r                              r                                r              r                 r             r                 r                     r                       r        r                r      r           r             r            r                r              r                  r                         r                          r           r                r                                 ',            
        '        H  $    $   H    H  $     $    H         $      $      r -+    r         r            r           r              r           r            r             r             r            r                r                        r                      r               r               r        r                   r              r               r                              r                  r            r                r                   r                r               r ',
        '        H           H    H             H       H           H     () ',
        'SSSSSSSSSSSS    SSSSSSSSSSSSS     SSSSSSSSSSSSSSSS       SSSSSSSSSSS',
        'sssssssssss     sssssssssssss      ssssssssssssss         ssssssssss',
        'ssssssssss       ssssssssss          sssssssssss    SS     sssssssss',
        'sssssssss         sssssss             ssssssss      ss      ssssssss',
        'sssssss            sssss                sssss       ss       sssssss',
        'sssssss            ssss                 sssss       ss       sssssss',
        'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
        'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    ],
    [
        '            %    $$$$$$ C            $$                           ',  
        '                $         ##########   $    C            C        ',  
        '                    ###   BBBBGBBBBB                              ',  
        '     C                 C  BBBBBBBGBB C  ###    C             F    ',  
        '        ##########        BBGBBBBBBB            ##########        ',
        '        BBBBBBBBBB        BBBBBBGBBB     F      BBBGBBBGBB        ',  
        '        BBBGBBBBBB        BBGBBBBBBB        C   BGBBBBBBBB        ',  
        '  C     BBBBBBBGBB        BBBBBBGBBB            BBBBBBGBBB   C    ',  
        '        BBGBBB####        BBBGBBBBBB   lll      BBGBBBBB€B        ',  
        '        BBBBBBGBBB        BBBBBBGBBB  lllll   C BBBBBBBGBB        ',  
        '        BBGBBBBBBB    C   BBBBBBBBBB lllllll    BBBBBBBBBB  F     ',  
        '    C   BBBBBBBGBB        BBGBB#####  lllll     BBGBBB####      C ',  
        '        ###GBBBBBB        BBBBBBBBBB    T       BBBBBBBGBB        ',  
        '        BBBBBBBBBB        BBBBBBGBBB    T       BBGBBBBBBB      -+',  
        '        BBBBBBBBBB   g    BBBBBBBBBB    T       BBBBBBBBBB    f ()',  
        'RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
        'šššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
        'šššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
        'šššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
        'šššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
        'šššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
      ],
      [
        '                                                                           ł                                                                           ł                                                                                                         ł                                                         ł                                                  ł                                                                                                  ł         ',
        '                                                                                     ',
        '                                                                                                               ł                                                                                                          ł                                                                                                                          ł                                                                                                                                                 ł            ',
        '       ł                                                                             ',
        '                                         ł                                                                                                                                     ł                                                                                                            ł                                                                                                                                                                   ł                                             ',
        '                                                                                     ',
        '                                                                                     ',
        '                                                                                                                              ł                                                                                                               ł                                                                        ł                                                                                ł                                                                     ł                              ',
        '                                                              F                      ',
        '                                                                                     ',
        '                                                                                  ł                                                                   ł                                                          ł                                                      ł                                                                                   ł                                                                                     ł                                                           ł',
        '     ł                                 F                                         F   ',
        '       ##%##                                  $$$$$            -+                    ',
        '                    F                        $                 ()                    ',
        '                                            $   #   đ                                ',
        '                 g                          _   F                                    ',
        'ß                                                                                    ',
        '                            Đ                                                        ',
        '                                                                                     ',
        '                                                                                     ',
        '                                                                                     ',
        '                                                                                     ',
        '                                                                                     ',
        '                                                                                     ',
        '                                                                                     ',
        '                                                                                     ',
        '                                                                                     ',
        'ččččččččččččččččččččččččččččččččččččččččččččččččččččččččččččččččččččččččččččččččččččč',
        'RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
        'ššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
        'ššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
        'ššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
        'ššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
        'ššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
    ],
    [   '                                                     IIII         I  ',
        '                                                        I         I  ',
        '                            i      C             C      I         I  ',
        '                                         F              I         I  ',
        '                   C               $$                   I         I  ',
        '        C                            $       C          I  F      I  ',
        '                          ######  ##  $                 I         I                      F ',
        '                          BBBBBBBBB########  #######BB###IIIIIIIIIIIIIIIIIIIIII ',
        '                          BBBBBBBBB########  ###BBGBBBGB#            ',  
        '        BBBBBBBBBB        BBBBBB###########$$$$#BBBBBBBB#            ',  
        '        BBBBBBBGBB   F    BBBBBBBBB########$$$$#BBBBBGBB#   C        F',  
        '   C    BBGBBBBBBB        BBBBBBBBB########$$$$##BB######            ',  
        '        BBBBBBGBBB        ####BBBBB#############BBBBBBGB#            ',  
        '        BBGBBBBBBB        BBBBBBBBB#############BBBBBBBB#      P     ',  
        '        BBBBBBBGBB        BBBBBBBBB##################BB##            ',  
        '        BBBGBBBBBB    C   BBBBB#################BBBBBBGB#            ',  
        '        BBBBBBBBBB        BBBB#BBBB#############BGBBBBBB#  F         ',  
        '        BBBBBBBBBB    f   BBB#BBBBB#############BBBBBBBBB            ',
        'RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
        'ššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
        'ššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
        'ššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
        'ššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
        'ššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššššš',
],

  ] 
      
       

       
       
       
      
       const levelCfg = {
       width: 20,
       height: 20,
       '=': [sprite('block'), solid()],
       '$': [sprite('coin'), 'coin'],
       '#': [sprite('brick'), solid()],
       '%': [sprite('qblock'), solid(), 'mushroom-qblock'],
       '(': [sprite('pipebl'), solid(), scale(0.5)],
       ')': [sprite('pipebr'), solid(), scale(0.5)],
       '-': [sprite('pipetl'), solid(), scale(0.5), 'pipe'],
       '+': [sprite('pipetr'), solid(), scale(0.5), 'pipe'],
       '!': [sprite('goomba'), 'enemy',body()],
       '_': [sprite('goomba1'),'enemy',body()],
       '*': [sprite('mushroom'), 'mushroom',body()],
       '€': [sprite('qblock'), solid(), 'coin-qblock'],
       '&': [sprite('hitblock'),solid()],
       'Ł': [sprite('dirt'), solid()],
       't': [sprite('tree') ],
       'r': [sprite('redguy'), 'danger'],
       'i': [sprite('invizb'),solid(),'coin-qblock'],
       'I': [sprite('invizb'),solid()],
       'S': [sprite('sands'), solid()],
       's': [sprite('sandb'), solid()],
       'c': [sprite('cloudg')],
       'C': [sprite('cloud')],
       'H': [sprite('cactus')],
       'j': [sprite('jumper'), 'bad',body()],
       'w': [sprite('water')],
       'W': [sprite('dwater')],
       'f': [sprite('car'), solid(), body(),'vehicle',scale(1)],
       'R': [sprite('road'),solid()],
       'š': [sprite('road2'),solid()],
       'g': [sprite('smortgoomba'),'enemy',body()],
       'F': [sprite('flyingguy'),'danger'],
       'l': [sprite('leafblock')],
       'T': [sprite('treeblock')],
       'G': [sprite('glassblock')],
       'B': [sprite('buildingblock')],
       'ł': [sprite('cloud2'), 'speedy', scale(4)],
       'ß': [sprite('truck'),solid()],
       'Đ': [sprite('truck2'),solid()],
       'đ': [sprite('truck3'),solid()],
       'č': [sprite('suprise'),'instdeath'],
       'P': [sprite('portal'),'portal'],
       'M': [sprite('virusblocklava'),solid()],
       'm': [sprite('virusblock'),solid()],
       'ž': [sprite('lava'),'danger'],
        }

    


   const gameLevel = addLevel(maps[level],levelCfg)
  
   const scoreLabel = add([
       text(score),
       pos(6,70),
       layer('ui'),
       {
           value: score,
       }
   ])

    add([text('level' + parseInt(level + 1)), pos(40,70)])

   function big(){
       let timer = 0
       let isBig = false
       return{
           update(){
               if(isBig) {    
                   timer -= dt()
                   if(timer <= 0){
                       this.smallify()
                   }
               }
           },
           isBig(){
               return isBig
           },
           smallify(){
             CURRENT_JUMP_FORCE= JUMP_FORCE
               this.scale = vec2(1)
               timer = 0
               isBig = false
           },
           biggify(time){
             CURRENT_JUMP_FORCE= BIG_JUMP_FORCE
               this.scale = vec2(2)
               timer = time
               isBig = true
           }
       }
   }

  


   const player = add([
     sprite('mario'), solid(),
     pos(50,200),
     body(),
     big(),
     origin('bot')  
   ])

   action('bad', (b)=>{
    if (b.grounded()){
        isJumping = true
        b.jump(CURRENT_JUMP_FORCE)
    }
        b.move(-JUMPER_SPEED,0)
   })

   action('vehicle', (v)=>{
       v.move(-BIG_MOVE_SPEED,0)
   })

   action('speedy', (s)=>{
       s.move(-CLOUD_MOVE_SPEED,0)
   })

   action('mushroom', (m)=>{
       m.move(35,0)
   })

   action('speedmushroom', (s)=>{
       s.move(35,0)
   })

   action('enemy' , (e)=>{
       e.move(-ENEMY_SPEED,0)
   })

   action('danger' , (d)=>{
       d.move(-DANGER_SPEED,0)
   })

   action('fall', (f)=>{
       f.move(0,200)
   })

  

   player.on("headbump", (obj)=>{
       if (obj.is('coin-qblock')){
           gameLevel.spawn('$',obj.gridPos.sub(0,1))
           destroy(obj)
           gameLevel.spawn('&',obj.gridPos.sub(0.0))
       }
       if (obj.is('mushroom-qblock')){
        gameLevel.spawn('*',obj.gridPos.sub(0,1))
        destroy(obj)
        gameLevel.spawn('&',obj.gridPos.sub(0.0))
       }
       if(obj.is('invizb')){
           gameLevel.spawn('$',obj.gridPos.sub(0,1))
           destroy(obj)
           gameLevel.spawn('&',obj.gridPos.sub(0,0))
       }
   })
    
   player.action(()=>{
       if(player.grounded()){
           isJumping = false
       }
   })

   player.collides('enemy', (e)=>{
       if(isJumping){
         destroy(e)
        }else{
         go('lose', {score: scoreLabel.value})
       }
    
   })

   player.collides('danger', (d)=>{
       go('lose', {score:scoreLabel.value})
   })

   player.collides('fall', (f)=>{
    go('lose', {score:scoreLabel.value})
})

    player.collides('bad', (b)=>{
    go('lose', {score:scoreLabel.value})
   })

    player.collides('instdeath', (i)=>{
        go('lose', {score:scoreLabel.value})
    })
   

   player.collides('mushroom', (m)=>{
       destroy(m)
       player.biggify(5)
   })

   

   player.collides('coin', (c)=> {
       destroy(c)
       scoreLabel.value++
       scoreLabel.text=scoreLabel.value
   })

   player.action(()=>{
       camPos(player.pos)
       if (player.pos.y >= VOID_DEATH){
           go('lose', {score: scoreLabel.value})
       }
   })

    const MOVE_SPEED = 130
    const CLOUD_MOVE_SPEED= 169
    const BIG_MOVE_SPEED= 200
    const JUMP_FORCE = 400
    let CURRENT_JUMP_FORCE= JUMP_FORCE
    const BIG_JUMP_FORCE= 500
    const ENEMY_SPEED= 40
    const DANGER_SPEED= 90
    const JUMPER_SPEED= 69
    let isJumping= true
    const VOID_DEATH= 1000

    player.collides('pipe', () =>{
        keyPress('down', () =>{
            go('game', {
                level: (level + 1) % maps.length,
                score: scoreLabel.value
            })
        })
    })
   
    player.collides('portal', () =>{
            go('game', {
                level: (level + 1) % maps.length,
                score: scoreLabel.value
            })
    })
    
    keyDown('left', ()=> {
        player.changeSprite('mario-going-left')
        player.move(-MOVE_SPEED,0)
    })

    keyDown('right', ()=> {
        player.changeSprite('mario-going-right')
        player.move(MOVE_SPEED,0)
    })

    keyDown('space', ()=> {
        if (player.grounded()){
            isJumping = true
            player.jump(CURRENT_JUMP_FORCE)
        }
         
        
    })

    keyPress('down', ()=>{
        player.changeSprite('mario-crouching')
    })

    keyPress('up', ()=>{
        player.changeSprite('mario')
    })

    keyPress('1', ()=>{
        player.changeSprite('mario-party')
    })

    keyPress('2', ()=>{
        player.changeSprite('mario-flex')
    })

    keyPress('3', ()=>{
        player.changeSprite('mario-cowboy')
    })

})

scene('lose', ({score}) => {
    add([text(score,32), origin('center'), pos(width()/2,height()/2)])
})

start("game", {level: 0, score:0})



