/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        app.triggleButton();
       /* coocaaosapi.startLocalMedia(
        function(message)
        {
             console.log(message);
        },
        function(error)
        {
            console.log(error);
        });
        */
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelectorAll('.received');

        listeningElement.setAttribute('style', 'display:none;');
        for( var i = 0 , j = receivedElement.length ; i < j ; i++ ){
            receivedElement[i].setAttribute('style', 'display:block;');
        }
      /*receivedElement.setAttribute('style', 'display:block;');*/

        console.log('Received Event: ' + id);
    },
    triggleButton:function(){
        cordova.require("coocaa-plugin-coocaaosapi.coocaaosapi");
        document.getElementById("startloaclmedia").addEventListener("click", function (){
            coocaaosapi.startLocalMedia( function(message) {console.log(message); },function(error) {console.log(error);});
        },false);

        document.getElementById("starttvsetting").addEventListener("click",  function (){
            coocaaosapi.startTVSetting(function(message)  {console.log(message); },function(error){console.log(error);});
        }, false);

        document.getElementById("startsourcelist").addEventListener("click",  function (){
            coocaaosapi.startSourceList( function(message){console.log(message);},function(error){console.log(error); });
        },false);

        document.getElementById("startqrcode").addEventListener("click", function (){
            coocaaosapi.startQRCode(function(message) {console.log(message); },function(error) { console.log(error);});
        },false);

        document.getElementById("startmoviehistory").addEventListener("click", function (){
            coocaaosapi.startMovieHistory(function(message) {console.log(message); },function(error) { console.log(error);});
        },false);

         document.getElementById("startmygames").addEventListener("click", function (){
            coocaaosapi.startMyGames(function(message) {console.log(message); },function(error) { console.log(error);});
         },false);

        document.getElementById("startnormallocalapp").addEventListener("click", function (){
            coocaaosapi.startMyApps("",function(message) {console.log(message); },function(error) { console.log(error);});
         },false);

        document.getElementById("startchildlocalapp").addEventListener("click", function (){
            coocaaosapi.startMyApps("child",function(message) {console.log(message); },function(error) { console.log(error);});
        },false);

        document.getElementById("startusersetting").addEventListener("click", function (){
           coocaaosapi.startUserSetting(function(message) {console.log(message); },function(error) { console.log(error);});
        },false);

       document.getElementById("startnetsetting").addEventListener("click", function (){
            coocaaosapi.startNetSetting(function(message) {console.log(message); },function(error) { console.log(error);});
       },false);

        document.getElementById("startbluetoothsetting").addEventListener("click", function (){
            coocaaosapi.startBlueToothSetting(function(message) {console.log(message); },function(error) { console.log(error);});
       },false);

       document.getElementById("startmssagebox").addEventListener("click", function (){
            coocaaosapi.startMessageBox(function(message) {console.log(message); },function(error) { console.log(error);});
       },false);

        document.getElementById("startupgrade").addEventListener("click", function (){
            coocaaosapi.startSystemUpgrade(function(message) {console.log(message); },function(error) { console.log(error);});
       },false);

        document.getElementById("startmovielist").addEventListener("click", function (){
            var listid = eval(document.getElementById('movielistid')).value;
            console.log(listid);
            coocaaosapi.startMovieList(listid,function(message) {console.log(message); },function(error) { console.log(error);});
       },false);

       document.getElementById("startmoviedetail").addEventListener("click", function (){
            var detailid = eval(document.getElementById('moviedetailid')).value;
            console.log(detailid);
            coocaaosapi.startMovieDetail(detailid,function(message) {console.log(message); },function(error) { console.log(error);});
       },false);

        document.getElementById("startmovietopic").addEventListener("click", function (){
            var topicid = eval(document.getElementById('movietopicid')).value;
            console.log(topicid);
            coocaaosapi.startMovieTopic(topicid,function(message) {console.log(message); },function(error) { console.log(error);});
        },false);

        document.getElementById("startmemcenter").addEventListener("click", function (){
            coocaaosapi.startMovieMemberCenter(function(message) {console.log(message); },function(error) { console.log(error);});
       },false);

        document.getElementById("startplaymovie").addEventListener("click", function (){
            var movieitem = '';
            coocaaosapi.playOnlineMovie(movieitem,function(message) {console.log(message); },function(error) { console.log(error);});
       },false);

        document.getElementById("startappstore").addEventListener("click", function (){
            coocaaosapi.startAppStore(function(message) {console.log(message); },function(error) { console.log(error);});
       },false);

        document.getElementById("startappstorebd").addEventListener("click", function (){
            coocaaosapi.startAppStoreBD(function(message) {console.log(message); },function(error) { console.log(error);});
       },false);

        document.getElementById("startappstoresort").addEventListener("click", function (){
             var sortid = eval(document.getElementById('appsortid')).value;
             console.log(sortid);
             coocaaosapi.startAppStoreSort(sortid,function(message) {console.log(message); },function(error) { console.log(error);});
       },false);

        document.getElementById("startappstorelist").addEventListener("click", function (){
             var listid = eval(document.getElementById('applistid')).value;
             console.log(listid);
             coocaaosapi.startAppStoreList(listid,function(message) {console.log(message); },function(error) { console.log(error);});
       },false);

        document.getElementById("startappstoredetail").addEventListener("click", function (){
              var detailid = eval(document.getElementById('appdetailid')).value;
              console.log(detailid);
              coocaaosapi.startAppStoreDetail(detailid,function(message) {console.log(message); },function(error) { console.log(error);});
        },false);

        document.getElementById("startappstorezone").addEventListener("click", function (){
              var zoneid = eval(document.getElementById('appzoneid')).value;
              console.log(zoneid);
              coocaaosapi.startAppStoreZone(zoneid,function(message) {console.log(message); },function(error) { console.log(error);});
        },false);

         document.getElementById("startdownloadapp").addEventListener("click", function (){
                      var downloadstring = eval(document.getElementById('downloadid')).value;
                      console.log(downloadstring);
                      coocaaosapi.startOrCreateDownloadTask(
                        "https://qd.myapp.com/myapp/qqteam/AndroidQQ/mobileqq_android.apk",
                        '',
                        'qq移动版',
                        'com.tencent.mobileqq',
                        '123123',
                        'http://img.zcool.cn/community/01559e565d84d832f875964706920d.png',
                        function(message) {console.log(message); },
                        function(error) { console.log(error);});
                },false);

        document.getElementById("startgamecenter").addEventListener("click", function (){
            coocaaosapi.startGameCenter(function(message) {console.log(message); },function(error) { console.log(error);});
        },false);

        document.getElementById("startgamearsenal").addEventListener("click", function (){
            coocaaosapi.startGameArsenal(function(message) {console.log(message); },function(error) { console.log(error);});
        },false);

        document.getElementById("startgamelist").addEventListener("click", function (){
            var gamelistid = eval(document.getElementById('gamelistid')).value;
            console.log(gamelistid);
            var gametitleid = eval(document.getElementById('gametitleid')).value;
            console.log(gametitleid);
            coocaaosapi.startGameCenterList(gamelistid,gametitleid,function(message) {console.log(message); },function(error) { console.log(error);})
        },false);

         document.getElementById("startgamedetail").addEventListener("click", function (){
             var gamedetailid = eval(document.getElementById('gamedetailid')).value;
             console.log(gamedetailid);
             coocaaosapi.startGameCenterDetail(gamedetailid,function(message) {console.log(message); },function(error) { console.log(error);});
         },false);

        document.getElementById("startgamezone").addEventListener("click", function (){
             var gamezoneid = eval(document.getElementById('gamezoneid')).value;
             console.log(gamezoneid);
             coocaaosapi.startGameCenterZone(gamezoneid,function(message) {console.log(message); },function(error) { console.log(error);});
         },false);

        document.getElementById("getsysteminfo").addEventListener("click", function (){
             coocaaosapi.getDeviceInfo(function(message) {
                console.log("panel " + message.panel);
                console.log("version " + message.version);
                console.log("model " + message.model);
                console.log("type " + message.type);
                console.log("mac " + message.mac);
                console.log("chip " + message.chip);
                console.log("androidsdk " + message.androidsdk);
                console.log("devid " + message.devid);
                console.log("activeid " + message.activeid);
                document.getElementById('systeminfoid').value = JSON.stringify(message);
             },function(error) { console.log(error);})
         },false);

        document.getElementById("getnetworking").addEventListener("click", function (){
            coocaaosapi.isNetConnected(function(message) {
            console.log("isnetworking " + message.isnetworking);
            document.getElementById('isnetworkingid').value = JSON.stringify(message);
            },function(error) { console.log(error);})
        },false);

        document.getElementById("getnettype").addEventListener("click", function (){
            coocaaosapi.getNetType(function(message) {
            console.log("nettype " + message.nettype);
            document.getElementById('nettypeid').value = JSON.stringify(message);
            },function(error) { console.log(error);})
        },false);

        document.getElementById("getipinfp").addEventListener("click", function (){
            coocaaosapi.getIpInfo(function(message) {
            console.log("dns0 " + message.dns0);
            console.log("dns1 " + message.dns1);
            console.log("gateway " + message.gateway);
            console.log("ip " + message.ip);
            console.log("mac " + message.mac);
            console.log("netmask " + message.netmask);
            document.getElementById('ipinfoid').value = JSON.stringify(message);
            },function(error) { console.log(error);})
        },false);

         document.getElementById("gethaslogin").addEventListener("click", function (){
                    coocaaosapi.hasCoocaaUserLogin(function(message) {
                    console.log("haslogin " + message.haslogin);
                    document.getElementById('hasloginid').value = JSON.stringify(message);
                    },function(error) { console.log(error);})
                },false);

        document.getElementById("getuserinfo").addEventListener("click", function (){
                   coocaaosapi.getUserInfo(function(message) {
                   console.log("address " + message.address);
                   console.log("avatar " + message.avatar);
                   console.log("avatars " + message.avatars);
                   console.log("birthday " + message.birthday);
                   console.log("city " + message.city);
                   console.log("corp " + message.corp);
                   console.log("district " + message.district);
                   console.log("education_grade " + message.education_grade);
                   console.log("email " + message.email);
                   console.log("gender " + message.gender);
                   console.log("idcard " + message.idcard);
                   console.log("line " + message.line);
                   console.log("mobile " + message.mobile);
                   console.log("nick_name " + message.nick_name);
                   console.log("occupation " + message.occupation);
                   console.log("open_id " + message.open_id);
                   console.log("oss_id " + message.oss_id);
                   console.log("postcode " + message.postcode);
                   console.log("province " + message.province);
                   console.log("qq " + message.qq);
                   console.log("region " + message.region);
                   console.log("region_id " + message.region_id);
                   console.log("revenue " + message.revenue);
                   console.log("score " + message.score);
                   console.log("sky_id " + message.sky_id);
                    console.log("skype " + message.skype);
                   console.log("slogan " + message.slogan);
                   console.log("tel1 " + message.tel1);
                   console.log("tel2 " + message.tel2);
                   console.log("visit_num " + message.visit_num);
                   console.log("wechat " + message.wechat);
                   console.log("weibo " + message.weibo);
                   console.log("balance " + message.balance);
                   console.log("third_account " + message.third_account);
                   console.log("external_info " + message.external_info);
                   document.getElementById('userinfoid').innerHTML = JSON.stringify(message);
                    },function(error) { console.log(error);})
                },false);

        document.getElementById("getlocation").addEventListener("click", function (){
            coocaaosapi.getDeviceLocation(function(message) {
            console.log("location " + message.location);
            document.getElementById('locationid').value = JSON.stringify(message);
            },function(error) { console.log(error);})
        },false);

        /*listener*/
        coocaaosapi.addNetChangedListener(function(message){
            console.log("nettype " + message.nettype);
            console.log("netevent " + message.netevent);
            document.getElementById("netchanged").value = JSON.stringify(message);
        });

        coocaaosapi.addUSBChangedListener(function(message){
                    console.log("usbinfo " + message.usb);
                    console.log( "USB_CHANGGED received! ismount: " + message.usbmount  );
                    console.log( "USB_CHANGGED received! mountpath: " + message.mountpath  );
                    document.getElementById("usbchanged").value = JSON.stringify(message);
                });

        coocaaosapi.addAppTaskListener(function(message){
             console.log("taskinfo " + JSON.stringify(message));
        });
    }
};

app.initialize();