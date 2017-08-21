var monstros = {"power":["6l","a7","b5","c3","d1","dv","es","fq","go","hm","ik","jh","kf","ld","mb","n9","o6","p4","q2","r0","ru","sr","tp","un","vl","10j","11g","12e","13c","14a","158","165","173","181","18v","19t","1aq","1bo","1cm","1dk","1ei","1ff","1gd","1hb","1i9","1j7","1k4","1l2","1m0","1mu","1ns","1op","1pn","1ql","1rj","1sh","1te","1uc","1va","208","216","223","231","23v","24t","25r","26o","27m","28k","29i","2ag","2bd","2cb","2d9","2e7","2f5","2g2","2h0","2hu","2is","2jq","2kn","2ll","2mj","2nh","2of","2pc","2qa","2r8","2s6","2t4","2u1","2uv","2vt","30r","31p","32m","33k","34i","35g","36e","37b","389","397","3a5","3b3","3c0","3cu","3ds","3eq","3fo","3gl","3hj","3ih","3jf","3kd","3la","3m8","3n6","3o4","3p2","3pv","3qt","3rr","3sp","3tn","3uk","3vi","40g","41e","42c"],"life":["1v","4f","4n","54","5n","6e","7b","8e","9l","b2","ck","ec","g8","ia","ki","mu","pg","s7","v4","125","15c","18p","1ca","1g1","1jt","1nu","1s5","20h","252","29p","2ek","2jl","2os","2u7","33o","39e","3fa","3la","3rg","41s","48c","4f2","4lt","4su","543","5be","5iv","5qk","62f","6af","6ik","6qv","73f","7c4","7kv","7tu","873","8ge","8pt","93i","9dc","9nc","a1g","abq","ama","b0u","bbo","bmn","c1s","cd5","cok","d49","dg2","ds1","e85","eke","f0t","fdh","fqa","g79","gkc","h1l","hf4","hsn","iag","ioe","j6i","jkq","k38","khs","l0k","lfi","lul","mdu","mtb","ncu","nsn","ock","osn","pcv","ptc","qdv","qun","rfk","s0n","shu","t3b","tku","u6l","uoi","vak","vss","10f8","111q","11ki","127e","12qg","13dn","1414","14kl","158c","15s9","16ga","174h","17ot","18de","1925","19n1","1ac2","1b19","1bmk"],"speed":["6u","am","bl","ck","dj","ei","fh","gg","hf","ie","je","kd","lc","mb","na","o9","p8","q7","r6","s5","t5","u4","v3","102","111","120","12v","13u","14t","15s","16s","17r","18q","19p","1ao","1bn","1cm","1dl","1ek","1fj","1gj","1hi","1ih","1jg","1kf","1le","1md","1nc","1ob","1pa","1qa","1r9","1s8","1t7","1u6","1v5","204","213","222","231","241","250","25v","26u","27t","28s","29r","2aq","2bp","2co","2do","2en","2fm","2gl","2hk","2ij","2ji","2kh","2lg","2mf","2nf","2oe","2pd","2qc","2rb","2sa","2t9","2u8","2v7","306","316","325","334","343","352","361","370","37v","38u","39t","3at","3bs","3cr","3dq","3ep","3fo","3gn","3hm","3il","3jk","3kk","3lj","3mi","3nh","3og","3pf","3qe","3rd","3sc","3tb","3ub","3va","409","418","427","436","445","454","463","472","482"]};


function Monster(){

    this.power = 0;
    this.life = 0;
    this.speed = 0;
    this.stamina = 0;

    this.runa1Power = 0;
    this.runa1Life = 0;
    this.runa1Speed = 0;
    this.runa1Stamina = 0;

    this.runa2Power = 0;
    this.runa2Life = 0;
    this.runa2Speed = 0;
    this.runa2Stamina = 0;

    this.runa3Power = 0;
    this.runa3Life = 0;
    this.runa3Speed = 0;
    this.runa3Stamina = 0;

    // TOTAL
    this.totalPower = 0;
    this.totalSpeed = 0;

}

Monster.prototype = {
    porForca: function(porcentagem){
        var power = this.power;
        return this.calcRunas(power, porcentagem);
    },
    porLife: function(porcentagem){
        var life = this.life;
        return this.calcRunas(life, porcentagem);
    },
    porSpeed: function(porcentagem){
        var speed = this.speed;
        return this.calcRunas(speed, porcentagem);
    },
    porStamina: function(porcentagem){
        var stamina = this.stamina;
        return this.calcRunas(stamina, porcentagem);
    },
    calcRunas: function(v1, porcentagem){
        var valorFixo = v1;
        var calculo  = (valorFixo * porcentagem) / 100;
        return Math.floor(calculo);
    },
    display: function(){
        document.querySelector('.stats-value-power').innerHTML = (this.runa1Power + this.runa2Power + this.runa3Power) + this.power;
        document.querySelector('.stats-value-life').innerHTML = (this.runa1Life + this.runa2Life + this.runa3Life) + this.life;
        document.querySelector('.stats-value-speed').innerHTML = (this.runa1Speed + this.runa2Speed + this.runa3Speed) + this.speed;
        document.querySelector('.stats-value-stamina').innerHTML = (this.runa1Stamina + this.runa2Stamina + this.runa3Stamina) + this.stamina;
    },
    idRuna1: function(valor){
        var v1 = valor;
        var runa = v1.split(" ");
        var tipo = runa[0];
        var lvl = runa[1];

        if(tipo == "f"){
            this.runa1Life = 0;
            this.runa1Speed = 0;
            this.runa1Stamina = 0;
            this.runa1Power = this.porForca(lvl);
        } else if(tipo == "l"){
            this.runa1Power = 0;
            this.runa1Speed = 0;
            this.runa1Stamina = 0;
            this.runa1Life = this.porLife(lvl);
        } else if(tipo == "v"){
            this.runa1Power = 0;
            this.runa1Life = 0;
            this.runa1Stamina = 0;
            this.runa1Speed = this.porSpeed(lvl);
        } else if(tipo == "r"){
            this.runa1Power = 0;
            this.runa1Life = 0;
            this.runa1Speed = 0;
            this.runa1Stamina = this.porStamina(lvl);
        } else if(tipo == "nulo"){

        }
    },

    idRuna2: function(valor){
        var v1 = valor;
        var runa = v1.split(" ");
        var tipo = runa[0];
        var lvl = runa[1];

        if(tipo == "f"){
            this.runa2Life = 0;
            this.runa2Speed = 0;
            this.runa2Stamina = 0;
            this.runa2Power = this.porForca(lvl);
        } else if(tipo == "l"){
            this.runa2Power = 0;
            this.runa2Speed = 0;
            this.runa2Stamina = 0;
            this.runa2Life = this.porLife(lvl);
        } else if(tipo == "v"){
            this.runa2Power = 0;
            this.runa2Life = 0;
            this.runa2Stamina = 0;
            this.runa2Speed = this.porSpeed(lvl);
        } else if(tipo == "r"){
            this.runa2Power = 0;
            this.runa2Life = 0;
            this.runa2Speed = 0;
            this.runa2Stamina = this.porStamina(lvl);
        } else if(tipo == "nulo"){

        }
    },

    idRuna3: function(valor){
        var v1 = valor;
        var runa = v1.split(" ");
        var tipo = runa[0];
        var lvl = runa[1];

        if(tipo == "f"){
            this.runa3Life = 0;
            this.runa3Speed = 0;
            this.runa3Stamina = 0;
            this.runa3Power = this.porForca(lvl);
        } else if(tipo == "l"){
            this.runa3Power = 0;
            this.runa3Speed = 0;
            this.runa3Stamina = 0;
            this.runa3Life = this.porLife(lvl);
        } else if(tipo == "v"){
            this.runa3Power = 0;
            this.runa3Life = 0;
            this.runa3Stamina = 0;
            this.runa3Speed = this.porSpeed(lvl);
        } else if(tipo == "r"){
            this.runa3Power = 0;
            this.runa3Life = 0;
            this.runa3Speed = 0;
            this.runa3Stamina = this.porStamina(lvl);
        } else if(tipo == "nulo"){

        }
    },
    reset: function(){

    this.runa1Power = 0;
    this.runa1Life = 0;
    this.runa1Speed = 0;
    this.runa1Stamina = 0;

    this.runa2Power = 0;
    this.runa2Life = 0;
    this.runa2Speed = 0;
    this.runa2Stamina = 0;

    this.runa3Power = 0;
    this.runa3Life = 0;
    this.runa3Speed = 0;
    this.runa3Stamina = 0;

    document.querySelector('.stat-head span').innerHTML = 0;
    document.querySelector('#monster_level_stat').value = 0;
    document.querySelector('.stats-value-power').innerHTML = 0;
    document.querySelector('.stats-value-life').innerHTML = 0;
    document.querySelector('.stats-value-speed').innerHTML = 0;
    document.querySelector('.stats-value-stamina').innerHTML = 140;

    document.querySelector('#nulo1').selected = true;
    document.querySelector('#nulo2').selected = true;
    document.querySelector('#nulo3').selected = true;

    },
    recuperarValor: function(){
        this.power = parseInt(document.querySelector('.stats-value-power').innerHTML);
        this.life = parseInt(document.querySelector('.stats-value-life').innerHTML);
        this.speed = parseInt(document.querySelector('.stats-value-speed').innerHTML);
        this.stamina = parseInt(document.querySelector('.stats-value-stamina').innerHTML);
    }

}

document.querySelector('#monster_level_stat').onchange = function(){
    var level = document.querySelector('#monster_level_stat').value;
    var stat_keys = ['power', 'life', 'speed'];
    var props = JSON.parse(document.querySelector('#monster_level_stat').getAttribute('data-props'));
    var stats = monstros;
    var level_html = 'STATS (Base)';

    if (level>0) level_html = level;
    document.querySelector('.stat-head span').innerHTML = level_html;

    for (i in stat_keys) {
        var value = parseInt(stats[stat_keys[i]][level],32);
        var html = value;
        if (value>999) {
            html = Math.floor(value/1000) + '';
            if ((value%1000) < 100) html += '0';
            if ((value%1000) < 10) html += '0';
            html += (value%1000);
        }
        document.querySelector(".stats-value-"+stat_keys[i]).innerHTML = html;
        m.recuperarValor();
    }
}