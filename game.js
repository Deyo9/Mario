kaboom({
    global:true,
    fullscreen:true,
    scale: 1.3,
    debug:true, 
    clearColor: [0,0,0,1,],
})


loadSprite('block', 'block.png')
loadSprite('brick', 'brick.png')
loadSprite('coin', 'coin.png')
loadSprite('goomba', 'goomba.png')
loadSprite('goomba1', 'goomba.png')
loadSprite('hitblock', 'hitblock.png')
loadSprite('mario', 'mario.png')
loadSprite('mushroom', 'mushroom.png')
loadSprite('pipebl', 'pipebl.png')
loadSprite('pipebr', 'pipebr.png')
loadSprite('pipetl', 'pipetl.png')
loadSprite('pipetr', 'pipetr.png')
loadSprite('qblock', 'qblock.png')
loadSprite('dirt','dirt.png')
loadSprite('tree', 'tree.png')
loadSprite('redguy', 'redguy.png')
loadSprite('speedm', 'speedm.png')
loadSprite('invizb', 'invizb.png')
loadSprite('sandb', 'sandblock.png')
loadSprite('sands', 'sandstone.png')
loadSprite('cloudg', 'cloudgreen.png')
loadSprite('cloud', 'cloud.png')
loadSprite('cactus', 'cactus.png')
loadSprite('jumper', 'jumper.png')
loadSprite('water', 'water.png')
loadSprite('dwater', 'water2.png')







scene("game", ({level, score}) => {
   layers(['bg','obj','ui'], 'obj')

   const maps = [
   
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
       '        $$$$$$                                j                  ',
       '              $                                     r            ',
       '       €###%###        $$$$$        €##       =                  ',
       '     ß                $     $                =Ł                  ', 
       '                                            =ŁŁ            -+    ',
       '   t    t     t    !           t     t     =ŁŁŁ   t _      ()    ',
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
       '                                     ŁŁ                    c     ',
       '                c    i               ŁŁ      c     c             ',
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
    [
        '                          sS                                     ',
        '            C          $$$ sS           C                   r    ',
        '   C          r             s                                    ',
        '                            s   ##            j   _ C            ',
        '         C     C            s    C        sssssssssssss          ',
        '                      ##€## sS                                   ',
        '   C                 C      ss      s                      C     ',
        '              SSS                   s      $ $ $ $ $             ',
        '     %       Ssss                  ss                            ',
        '      H     Ss              H       s                H     -+    ',
        '      H    Ss      H        H       s        !       H     ()    ',
        'SSSSSSSSSSSSsssssSSSSSSSSSSSSSSSSSSSsSSSSSSSSSSSSSSSSSSSSSSSSSSSS',
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
      '                                           ',
      '                                           ',
      '                                           ',
      '                                           ',
      '                                           ',
      '         $    $    $   $   $               ',
      '         $    $        $$  $               ',
      '         $    $    $   $ $ $               ',
      '         $  $ $    $   $  $$               ',
      '          $  $     $   $   $               ',
      '                                           ',
      '===========================================',
      'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ',
      'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ',
      'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ',
      'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ',
      'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ',
      'ŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁŁ',  
    ]
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
       'S': [sprite('sands'), solid()],
       's': [sprite('sandb'), solid()],
       'c': [sprite('cloudg')],
       'C': [sprite('cloud')],
       'H': [sprite('cactus')],
       'j': [sprite('jumper'), 'bad',body()],
       'w': [sprite('water')],
       'W': [sprite('dwater')],
       
       

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
     pos(30,6),
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

    player.collides('bad', (b)=>{
    go('lose', {score:scoreLabel.value})
   })


   

   player.collides('mushroom', (m)=>{
       destroy(m)
       player.biggify(5)
   })

   player.collides('speedmushroom', (s)=>{
       destroy(s)
       player.fastify(5)
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

    const MOVE_SPEED = 120
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
                level: (level+1),
                score: scoreLabel.value
            })
        })
    })

    
    keyDown('left', ()=> {
        player.move(-MOVE_SPEED,0)
    })

    keyDown('right', ()=> {
        player.move(MOVE_SPEED,0)
    })

    keyPress('space', ()=> {
        if (player.grounded()){
            isJumping = true
            player.jump(CURRENT_JUMP_FORCE)
        }
         
        
    })
})

scene('lose', ({score}) => {
    add([text(score,32), origin('center'), pos(width()/2,height()/2)])
})

start("game", {level: 0, score:0})



