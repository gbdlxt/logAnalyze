const data = {
  "took": 2011,
  "timed_out": false,
  "num_reduce_phases": 9,
  "_shards": {
    "total": 1020,
    "successful": 1020,
    "skipped": 500,
    "failed": 0
  },
  "_clusters": {
    "total": 4,
    "successful": 4,
    "skipped": 0
  },
  "hits": {
    "total": 16,
    "max_score": null,
    "hits": [
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "vQE_84kBICyUR95t01MS",
        "_version": 1,
        "_score": null,
        "_source": {
          "client_ip": "112.2.5.45",
          "host": "online-qcloud-ap-shanghai-4-vm-27831",
          "roomid": "168339",
          "@timestamp": "2023-08-14T08:53:11.929Z",
          "level": "1",
          "userid": "1692003190039",
          "client_time": "2023-08-14T08:53:11.834Z",
          "ipip": {
            "isp_domain": "移动",
            "db_build": 1689129098,
            "region_name": "江苏",
            "city_name": "南京",
            "country_name": "中国",
            "ip": "112.2.5.45"
          },
          "time": "2023/08/14 16:53:11.834",
          "action_detail": "",
          "server_time": 1692003191929,
          "@type": "access-client-report",
          "appid": 3128473024,
          "sessionid": "911004103398658048",
          "action": "zc.al",
          "userName": "u1692003190039",
          "content": "roomStreamUpdate [\"168339\",\"ADD\",[{\"streamID\":\"168339_193734025324_1692002850521_video\",\"user\":{\"userID\":\"168339_193734025324\",\"userName\":\"快游6724l28yg\"},\"urlsFLV\":\"http://hdl2-ws.migufun.com/live/168339_193734025324_1692002850521_video.flv\",\"urlsRTMP\":\"rtmp://rtmp2-ws.migufun.com/live/168339_193734025324_1692002850521_video\",\"urlsHLS\":\"http://hls2-ws.migufun.com/live/168339_193734025324_1692002850521_video/playlist.m3u8\",\"urlsHttpsFLV\":\"\",\"urlsHttpsHLS\":\"\"}],\"\"]",
          "@version": "1",
          "path": "/data/log02/access-client-report.log.036"
        },
        "fields": {
          "client_time": [
            "2023-08-14T08:53:11.834Z"
          ],
          "@timestamp": [
            "2023-08-14T08:53:11.929Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003191929
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "0cY_84kBsxvNFPks0Tt0",
        "_version": 1,
        "_score": null,
        "_source": {
          "roomid": "168339",
          "@type": "access-client-report",
          "action": "zm.al",
          "client_time": "2023-08-14T08:53:11.840Z",
          "client_ip": "112.2.5.45",
          "time": "2023/08/14 16:53:11.840",
          "level": "1",
          "userid": "1692003190039",
          "@timestamp": "2023-08-14T08:53:11.935Z",
          "host": "online-qcloud-ap-shanghai-4-vm-27832",
          "content": "roomStateChanged [\"168339\",\"LOGINED\",0,null]",
          "appid": 3128473024,
          "sessionid": "911004103398658048",
          "path": "/data/log01/access-client-report.log.036",
          "ipip": {
            "region_name": "江苏",
            "city_name": "南京",
            "isp_domain": "移动",
            "db_build": 1689129098,
            "ip": "112.2.5.45",
            "country_name": "中国"
          },
          "server_time": 1692003191935,
          "@version": "1",
          "userName": "u1692003190039",
          "action_detail": ""
        },
        "fields": {
          "client_time": [
            "2023-08-14T08:53:11.840Z"
          ],
          "@timestamp": [
            "2023-08-14T08:53:11.935Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003191935
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "VVQ_84kB43fEZ_sU0aC-",
        "_version": 1,
        "_score": null,
        "_source": {
          "roomid": "168339",
          "@type": "access-client-report",
          "action": "zc.al",
          "client_time": "2023-08-14T08:53:11.855Z",
          "client_ip": "112.2.5.45",
          "time": "2023/08/14 16:53:11.855",
          "level": "1",
          "userid": "1692003190039",
          "@timestamp": "2023-08-14T08:53:11.950Z",
          "host": "online-qcloud-ap-shanghai-4-vm-27832",
          "content": "playerStateUpdate [{\"state\":\"PLAY_REQUESTING\",\"streamID\":\"168339_193734025324_1692002850521_video\",\"errorCode\":0,\"extendedData\":\"\"}]",
          "appid": 3128473024,
          "sessionid": "911004103398658048",
          "path": "/data/log01/access-client-report.log.036",
          "ipip": {
            "region_name": "江苏",
            "city_name": "南京",
            "isp_domain": "移动",
            "db_build": 1689129098,
            "ip": "112.2.5.45",
            "country_name": "中国"
          },
          "server_time": 1692003191950,
          "@version": "1",
          "userName": "u1692003190039",
          "action_detail": ""
        },
        "fields": {
          "client_time": [
            "2023-08-14T08:53:11.855Z"
          ],
          "@timestamp": [
            "2023-08-14T08:53:11.950Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003191950
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "bTc_84kBPO2POMS60SWN",
        "_version": 1,
        "_score": null,
        "_source": {
          "roomid": "168339",
          "@type": "access-client-report",
          "action": "zc.al",
          "client_time": "2023-08-14T08:53:11.867Z",
          "client_ip": "112.2.5.45",
          "time": "2023/08/14 16:53:11.867",
          "level": "1",
          "userid": "1692003190039",
          "@timestamp": "2023-08-14T08:53:11.962Z",
          "host": "online-qcloud-ap-shanghai-4-vm-27832",
          "content": "playerStateUpdate [{\"state\":\"PLAY_REQUESTING\",\"streamID\":\"168339_193734025324_1692002850521_video\",\"errorCode\":1102023,\"extendedData\":\"connect signal fail [object Object]\"}]",
          "appid": 3128473024,
          "sessionid": "911004103398658048",
          "path": "/data/log01/access-client-report.log.036",
          "ipip": {
            "region_name": "江苏",
            "city_name": "南京",
            "isp_domain": "移动",
            "db_build": 1689129098,
            "ip": "112.2.5.45",
            "country_name": "中国"
          },
          "server_time": 1692003191962,
          "@version": "1",
          "userName": "u1692003190039",
          "action_detail": ""
        },
        "fields": {
          "client_time": [
            "2023-08-14T08:53:11.867Z"
          ],
          "@timestamp": [
            "2023-08-14T08:53:11.962Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003191962
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "pCND84kBCPX1sriUGyIu",
        "_version": 1,
        "_score": null,
        "_source": {
          "roomid": "168339",
          "@type": "access-client-report",
          "action": "zc.al",
          "client_time": "2023-08-14T08:56:47.865Z",
          "client_ip": "112.2.5.45",
          "time": "2023/08/14 16:56:47.865",
          "level": "1",
          "userid": "1692003190039",
          "@timestamp": "2023-08-14T08:56:47.961Z",
          "host": "online-qcloud-ap-shanghai-4-vm-27832",
          "content": "playerStateUpdate [{\"state\":\"NO_PLAY\",\"streamID\":\"168339_193734025324_1692002850521_video\",\"errorCode\":1002050,\"extendedData\":\"\"}]",
          "appid": 3128473024,
          "sessionid": "0",
          "path": "/data/log02/access-client-report.log.036",
          "ipip": {
            "region_name": "江苏",
            "city_name": "南京",
            "isp_domain": "移动",
            "db_build": 1689129098,
            "ip": "112.2.5.45",
            "country_name": "中国"
          },
          "server_time": 1692003407961,
          "@version": "1",
          "userName": "u1692003190039",
          "action_detail": ""
        },
        "fields": {
          "client_time": [
            "2023-08-14T08:56:47.865Z"
          ],
          "@timestamp": [
            "2023-08-14T08:56:47.961Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003407961
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "qSND84kBCPX1sriUGyIu",
        "_version": 1,
        "_score": null,
        "_source": {
          "roomid": "168339",
          "@type": "access-client-report",
          "action": "zm.al",
          "client_time": "2023-08-14T08:56:47.865Z",
          "client_ip": "112.2.5.45",
          "time": "2023/08/14 16:56:47.865",
          "level": "1",
          "userid": "1692003190039",
          "@timestamp": "2023-08-14T08:56:47.962Z",
          "host": "online-qcloud-ap-shanghai-4-vm-27832",
          "content": "roomStateChanged [\"168339\",\"KICKOUT\",1002050,\"{\\\"custom_kickout_message\\\":\\\"kickout may be the same user ID login other; kickout reason: 1\\\"}\"]",
          "appid": 3128473024,
          "sessionid": "0",
          "path": "/data/log02/access-client-report.log.036",
          "ipip": {
            "region_name": "江苏",
            "city_name": "南京",
            "isp_domain": "移动",
            "db_build": 1689129098,
            "ip": "112.2.5.45",
            "country_name": "中国"
          },
          "server_time": 1692003407962,
          "@version": "1",
          "userName": "u1692003190039",
          "action_detail": ""
        },
        "fields": {
          "client_time": [
            "2023-08-14T08:56:47.865Z"
          ],
          "@timestamp": [
            "2023-08-14T08:56:47.962Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003407962
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "uLdD84kBFcUw68KEHsbZ",
        "_version": 1,
        "_score": null,
        "_source": {
          "server_time": 1692003407972,
          "@version": "1",
          "action_detail": "",
          "action": "zc.al",
          "host": "online-qcloud-ap-shanghai-4-vm-27796",
          "@type": "access-client-report",
          "sessionid": "911005009565458432",
          "path": "/data/log02/access-client-report.log.036",
          "userid": "1692003190039",
          "roomid": "168339",
          "@timestamp": "2023-08-14T08:56:47.972Z",
          "time": "2023/08/14 16:56:47.879",
          "content": "roomStreamUpdate [\"168339\",\"ADD\",[{\"streamID\":\"168339_193734025324_1692002850521_video\",\"user\":{\"userID\":\"168339_193734025324\",\"userName\":\"快游6724l28yg\"},\"urlsFLV\":\"http://hdl2-ws.migufun.com/live/168339_193734025324_1692002850521_video.flv\",\"urlsRTMP\":\"rtmp://rtmp2-ws.migufun.com/live/168339_193734025324_1692002850521_video\",\"urlsHLS\":\"http://hls2-ws.migufun.com/live/168339_193734025324_1692002850521_video/playlist.m3u8\",\"urlsHttpsFLV\":\"\",\"urlsHttpsHLS\":\"\"}],\"\"]",
          "userName": "u1692003190039",
          "level": "1",
          "appid": 3128473024,
          "client_time": "2023-08-14T08:56:47.879Z",
          "client_ip": "112.2.5.45",
          "ipip": {
            "ip": "112.2.5.45",
            "isp_domain": "移动",
            "city_name": "南京",
            "country_name": "中国",
            "region_name": "江苏",
            "db_build": 1689129098
          }
        },
        "fields": {
          "client_time": [
            "2023-08-14T08:56:47.879Z"
          ],
          "@timestamp": [
            "2023-08-14T08:56:47.972Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003407972
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "ybdD84kBFcUw68KEHsbZ",
        "_version": 1,
        "_score": null,
        "_source": {
          "server_time": 1692003407973,
          "@version": "1",
          "action_detail": "",
          "action": "zm.al",
          "host": "online-qcloud-ap-shanghai-4-vm-27796",
          "@type": "access-client-report",
          "sessionid": "911005009565458432",
          "path": "/data/log02/access-client-report.log.036",
          "userid": "1692003190039",
          "roomid": "168339",
          "@timestamp": "2023-08-14T08:56:47.973Z",
          "time": "2023/08/14 16:56:47.880",
          "content": "roomStateChanged [\"168339\",\"LOGINED\",0,null]",
          "userName": "u1692003190039",
          "level": "1",
          "appid": 3128473024,
          "client_time": "2023-08-14T08:56:47.880Z",
          "client_ip": "112.2.5.45",
          "ipip": {
            "ip": "112.2.5.45",
            "isp_domain": "移动",
            "city_name": "南京",
            "country_name": "中国",
            "region_name": "江苏",
            "db_build": 1689129098
          }
        },
        "fields": {
          "client_time": [
            "2023-08-14T08:56:47.880Z"
          ],
          "@timestamp": [
            "2023-08-14T08:56:47.973Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003407973
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "ObdD84kBFcUw68KEHcFR",
        "_version": 1,
        "_score": null,
        "_source": {
          "appid": 3128473024,
          "sessionid": "911005009565458432",
          "path": "/data/log02/access-client-report.log.036",
          "server_time": 1692003407978,
          "host": "online-qcloud-ap-shanghai-5-vm-27814",
          "action": "zc.al",
          "userid": "1692003190039",
          "ipip": {
            "city_name": "南京",
            "isp_domain": "移动",
            "ip": "112.2.5.45",
            "country_name": "中国",
            "db_build": 1689129098,
            "region_name": "江苏"
          },
          "userName": "u1692003190039",
          "client_time": "2023-08-14T08:56:47.885Z",
          "level": "1",
          "time": "2023/08/14 16:56:47.885",
          "client_ip": "112.2.5.45",
          "action_detail": "",
          "roomid": "168339",
          "@timestamp": "2023-08-14T08:56:47.978Z",
          "content": "playerStateUpdate [{\"state\":\"PLAY_REQUESTING\",\"streamID\":\"168339_193734025324_1692002850521_video\",\"errorCode\":0,\"extendedData\":\"\"}]",
          "@version": "1",
          "@type": "access-client-report"
        },
        "fields": {
          "client_time": [
            "2023-08-14T08:56:47.885Z"
          ],
          "@timestamp": [
            "2023-08-14T08:56:47.978Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003407978
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "PNlD84kBsxvNFPksHfxO",
        "_version": 1,
        "_score": null,
        "_source": {
          "appid": 3128473024,
          "sessionid": "911005009565458432",
          "path": "/data/log02/access-client-report.log.036",
          "server_time": 1692003407984,
          "host": "online-qcloud-ap-shanghai-5-vm-27814",
          "action": "zc.al",
          "userid": "1692003190039",
          "ipip": {
            "city_name": "南京",
            "isp_domain": "移动",
            "ip": "112.2.5.45",
            "country_name": "中国",
            "db_build": 1689129098,
            "region_name": "江苏"
          },
          "userName": "u1692003190039",
          "client_time": "2023-08-14T08:56:47.891Z",
          "level": "1",
          "time": "2023/08/14 16:56:47.891",
          "client_ip": "112.2.5.45",
          "action_detail": "",
          "roomid": "168339",
          "@timestamp": "2023-08-14T08:56:47.984Z",
          "content": "playerStateUpdate [{\"state\":\"PLAY_REQUESTING\",\"streamID\":\"168339_193734025324_1692002850521_video\",\"errorCode\":1102023,\"extendedData\":\"connect signal fail [object Object]\"}]",
          "@version": "1",
          "@type": "access-client-report"
        },
        "fields": {
          "client_time": [
            "2023-08-14T08:56:47.891Z"
          ],
          "@timestamp": [
            "2023-08-14T08:56:47.984Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003407984
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "loRH84kBJYGoDvniVxTO",
        "_version": 1,
        "_score": null,
        "_source": {
          "client_time": "2023-08-14T09:01:24.460Z",
          "time": "2023/08/14 17:01:24.460",
          "appid": 3128473024,
          "userName": "u1692003190039",
          "action_detail": "",
          "sessionid": "911005009565458432",
          "@timestamp": "2023-08-14T09:01:24.554Z",
          "roomid": "168339",
          "path": "/data/log02/access-client-report.log.037",
          "@version": "1",
          "userid": "1692003190039",
          "host": "online-qcloud-ap-shanghai-4-vm-27825",
          "@type": "access-client-report",
          "action": "zc.al",
          "content": "roomStreamUpdate [\"168339\",\"DELETE\",[{\"streamID\":\"168339_193734025324_1692002850521_video\",\"user\":{\"userID\":\"168339_193734025324\",\"userName\":\"快游6724l28yg\"},\"urlsFLV\":\"http://hdl2-ws.migufun.com/live/168339_193734025324_1692002850521_video.flv\",\"urlsRTMP\":\"rtmp://rtmp2-ws.migufun.com/live/168339_193734025324_1692002850521_video\",\"urlsHLS\":\"http://hls2-ws.migufun.com/live/168339_193734025324_1692002850521_video/playlist.m3u8\",\"urlsHttpsFLV\":\"\",\"urlsHttpsHLS\":\"\"}],\"{\\\"stream_delete_reason\\\":[{\\\"stream_id\\\":\\\"168339_193734025324_1692002850521_video\\\",\\\"code\\\":6,\\\"description\\\":\\\"remove_by_server\\\"}]}\"]",
          "server_time": 1692003684554,
          "ipip": {
            "ip": "112.2.5.45",
            "city_name": "南京",
            "db_build": 1689129098,
            "country_name": "中国",
            "region_name": "江苏",
            "isp_domain": "移动"
          },
          "level": "1",
          "client_ip": "112.2.5.45"
        },
        "fields": {
          "client_time": [
            "2023-08-14T09:01:24.460Z"
          ],
          "@timestamp": [
            "2023-08-14T09:01:24.554Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003684554
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "fclH84kB5Oq-FYH0V0TC",
        "_version": 1,
        "_score": null,
        "_source": {
          "host": "online-qcloud-ap-shanghai-4-vm-27824",
          "@version": "1",
          "action_detail": "",
          "server_time": 1692003684558,
          "ipip": {
            "ip": "112.2.5.45",
            "city_name": "南京",
            "db_build": 1689129098,
            "country_name": "中国",
            "region_name": "江苏",
            "isp_domain": "移动"
          },
          "userid": "1692003190039",
          "path": "/data/log01/access-client-report.log.036",
          "roomid": "168339",
          "content": "playerStateUpdate [{\"state\":\"NO_PLAY\",\"streamID\":\"168339_193734025324_1692002850521_video\",\"errorCode\":0,\"extendedData\":\"\"}]",
          "sessionid": "911005009565458432",
          "@timestamp": "2023-08-14T09:01:24.558Z",
          "action": "zc.al",
          "level": "1",
          "time": "2023/08/14 17:01:24.464",
          "@type": "access-client-report",
          "client_time": "2023-08-14T09:01:24.464Z",
          "appid": 3128473024,
          "client_ip": "112.2.5.45",
          "userName": "u1692003190039"
        },
        "fields": {
          "client_time": [
            "2023-08-14T09:01:24.464Z"
          ],
          "@timestamp": [
            "2023-08-14T09:01:24.558Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003684558
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "UdFH84kBFcUw68KEVTa3",
        "_version": 1,
        "_score": null,
        "_source": {
          "ipip": {
            "ip": "112.2.5.45",
            "db_build": 1689129098,
            "city_name": "南京",
            "isp_domain": "移动",
            "country_name": "中国",
            "region_name": "江苏"
          },
          "action": "zm.al",
          "host": "online-qcloud-ap-shanghai-5-vm-27798",
          "client_time": "2023-08-14T09:01:24.681Z",
          "content": "roomStateChanged [\"168339\",\"KICKOUT\",1002050,\"{\\\"custom_kickout_message\\\":\\\"kickout may be the same user ID login other; kickout reason: 1\\\"}\"]",
          "level": "1",
          "time": "2023/08/14 17:01:24.681",
          "userName": "u1692003190039",
          "userid": "1692003190039",
          "@version": "1",
          "@timestamp": "2023-08-14T09:01:24.775Z",
          "sessionid": "0",
          "@type": "access-client-report",
          "server_time": 1692003684775,
          "path": "/data/log01/access-client-report.log.036",
          "action_detail": "",
          "appid": 3128473024,
          "client_ip": "112.2.5.45",
          "roomid": "168339"
        },
        "fields": {
          "client_time": [
            "2023-08-14T09:01:24.681Z"
          ],
          "@timestamp": [
            "2023-08-14T09:01:24.775Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003684775
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "o1JH84kBJUnO3LyuVu3h",
        "_version": 1,
        "_score": null,
        "_source": {
          "action_detail": "",
          "roomid": "168339",
          "ipip": {
            "ip": "112.2.5.45",
            "country_name": "中国",
            "region_name": "江苏",
            "db_build": 1689129098,
            "city_name": "南京",
            "isp_domain": "移动"
          },
          "action": "zm.al",
          "@timestamp": "2023-08-14T09:01:24.799Z",
          "server_time": 1692003684799,
          "content": "roomStateChanged [\"168339\",\"LOGINED\",0,null]",
          "level": "1",
          "time": "2023/08/14 17:01:24.703",
          "@type": "access-client-report",
          "host": "online-qcloud-ap-shanghai-5-vm-27810",
          "sessionid": "911006170632687616",
          "client_ip": "112.2.5.45",
          "userName": "u1692003190039",
          "userid": "1692003190039",
          "path": "/data/log01/access-client-report.log.036",
          "appid": 3128473024,
          "client_time": "2023-08-14T09:01:24.703Z",
          "@version": "1"
        },
        "fields": {
          "client_time": [
            "2023-08-14T09:01:24.703Z"
          ],
          "@timestamp": [
            "2023-08-14T09:01:24.799Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003684799
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "ZYZH84kBJYGoDvniuo7U",
        "_version": 1,
        "_score": null,
        "_source": {
          "@version": "1",
          "host": "online-qcloud-ap-shanghai-5-vm-27807",
          "roomid": "168339",
          "time": "2023/08/14 17:01:50.761",
          "action_detail": "",
          "level": "1",
          "ipip": {
            "country_name": "中国",
            "isp_domain": "移动",
            "city_name": "南京",
            "ip": "112.2.5.45",
            "db_build": 1689129098,
            "region_name": "江苏"
          },
          "@type": "access-client-report",
          "userid": "1692003190039",
          "@timestamp": "2023-08-14T09:01:50.857Z",
          "client_time": "2023-08-14T09:01:50.761Z",
          "userName": "u1692003190039",
          "server_time": 1692003710857,
          "path": "/data/log01/access-client-report.log.036",
          "content": "roomStreamUpdate [\"168339\",\"ADD\",[{\"streamID\":\"168339_193734025324_1692003710464_video\",\"user\":{\"userID\":\"168339_193734025324\",\"userName\":\"快游6724l28yg\"},\"urlsFLV\":\"http://hdl2-ws.migufun.com/live/168339_193734025324_1692003710464_video.flv\",\"urlsRTMP\":\"rtmp://rtmp2-ws.migufun.com/live/168339_193734025324_1692003710464_video\",\"urlsHLS\":\"http://hls2-ws.migufun.com/live/168339_193734025324_1692003710464_video/playlist.m3u8\",\"urlsHttpsFLV\":\"\",\"urlsHttpsHLS\":\"\"}],\"\"]",
          "appid": 3128473024,
          "sessionid": "911006170632687616",
          "action": "zc.al",
          "client_ip": "112.2.5.45"
        },
        "fields": {
          "client_time": [
            "2023-08-14T09:01:50.761Z"
          ],
          "@timestamp": [
            "2023-08-14T09:01:50.857Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003710857
        ]
      },
      {
        "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.13-000783",
        "_type": "_doc",
        "_id": "QYpH84kBOsujsBmf1iY4",
        "_version": 1,
        "_score": null,
        "_source": {
          "roomid": "168339",
          "action": "zm.al",
          "appid": 3128473024,
          "host": "online-qcloud-ap-shanghai-4-vm-27791",
          "@version": "1",
          "userName": "u1692003190039",
          "@type": "access-client-report",
          "client_ip": "112.2.5.45",
          "@timestamp": "2023-08-14T09:01:57.353Z",
          "sessionid": "0",
          "content": "roomStateChanged [\"168339\",\"LOGOUT\",0,null]",
          "server_time": 1692003717353,
          "path": "/data/log02/access-client-report.log.037",
          "level": "1",
          "action_detail": "",
          "ipip": {
            "country_name": "中国",
            "isp_domain": "移动",
            "ip": "112.2.5.45",
            "db_build": 1689129098,
            "region_name": "江苏",
            "city_name": "南京"
          },
          "time": "2023/08/14 17:01:57.255",
          "client_time": "2023-08-14T09:01:57.255Z",
          "userid": "1692003190039"
        },
        "fields": {
          "client_time": [
            "2023-08-14T09:01:57.255Z"
          ],
          "@timestamp": [
            "2023-08-14T09:01:57.353Z"
          ]
        },
        "highlight": {
          "action": [
            "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
          ],
          "userid": [
            "@kibana-highlighted-field@1692003190039@/kibana-highlighted-field@"
          ],
          "action.keyword": [
            "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
          ],
          "roomid": [
            "@kibana-highlighted-field@168339@/kibana-highlighted-field@"
          ]
        },
        "sort": [
          1692003717353
        ]
      }
    ]
  },
  "aggregations": {
    "2": {
      "buckets": [
        {
          "key_as_string": "2023-08-14T12:00:00.000+08:00",
          "key": 1691985600000,
          "doc_count": 16
        }
      ]
    }
  }
}

  setLogHits(data.hits.hits);