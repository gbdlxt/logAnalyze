const data = {
    "took": 1875,
    "timed_out": false,
    "num_reduce_phases": 4,
    "_shards": {
      "total": 1020,
      "successful": 1020,
      "skipped": 820,
      "failed": 0
    },
    "_clusters": {
      "total": 4,
      "successful": 4,
      "skipped": 0
    },
    "hits": {
      "total": 24,
      "max_score": null,
      "hits": [
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "OcULF4oBiLPgUdSRibYn",
          "_version": 1,
          "_score": null,
          "_source": {
            "level": "1",
            "time": "2023/08/21 15:42:24.759",
            "client_ip": "116.25.47.239",
            "client_time": "2023-08-21T07:42:24.759Z",
            "@version": "1",
            "host": "online-qcloud-ap-shanghai-4-vm-27823",
            "server_time": 1692603745085,
            "userid": "sample1692603718595",
            "action_detail": "",
            "path": "/data/log02/access-client-report.log.045",
            "content": "roomStateChanged [\"951753123\",\"LOGINED\",0,null]",
            "sessionid": "913523004565127168",
            "@timestamp": "2023-08-21T07:42:25.085Z",
            "action": "zm.al",
            "ipip": {
              "country_name": "中国",
              "region_name": "广东",
              "ip": "116.25.47.239",
              "city_name": "深圳",
              "isp_domain": "电信",
              "db_build": 1692153100
            },
            "appid": 1739272706,
            "@type": "access-client-report",
            "roomid": "951753123",
            "userName": "sampleUser1692603718583"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:42:24.759Z"
            ],
            "@timestamp": [
              "2023-08-21T07:42:25.085Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692603744759
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "gcwLF4oBIWivKjXMjpng",
          "_version": 1,
          "_score": null,
          "_source": {
            "level": "1",
            "userName": "sampleUser1692603718583",
            "@timestamp": "2023-08-21T07:42:26.416Z",
            "ipip": {
              "region_name": "广东",
              "isp_domain": "电信",
              "db_build": 1692153100,
              "city_name": "深圳",
              "ip": "116.25.47.239",
              "country_name": "中国"
            },
            "action_detail": "",
            "userid": "sample1692603718595",
            "time": "2023/08/21 15:42:26.362",
            "content": "publisherStateUpdate [{\"state\":\"PUBLISHING\",\"streamID\":\"webrtc1692603746081\",\"errorCode\":0,\"extendedData\":\"\"}]",
            "roomid": "951753123",
            "action": "zc.al",
            "client_ip": "116.25.47.239",
            "path": "/data/log01/access-client-report.log.012",
            "server_time": 1692603746416,
            "@version": "1",
            "host": "online-qcloud-ap-shanghai-4-vm-27834",
            "client_time": "2023-08-21T07:42:26.362Z",
            "@type": "access-client-report",
            "appid": 1739272706,
            "sessionid": "913523004565127168"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:42:26.362Z"
            ],
            "@timestamp": [
              "2023-08-21T07:42:26.416Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692603746362
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "VSELF4oB43fEZ_sUkeWU",
          "_version": 1,
          "_score": null,
          "_source": {
            "level": "1",
            "@timestamp": "2023-08-21T07:42:26.169Z",
            "client_time": "2023-08-21T07:42:26.870Z",
            "time": "2023/08/21 15:42:26.87",
            "userid": "sample1692603718595",
            "@type": "access-client-report",
            "action": "zc.al",
            "server_time": 1692603746169,
            "@version": "1",
            "client_ip": "116.25.47.239",
            "sessionid": "913523004565127168",
            "roomid": "951753123",
            "userName": "sampleUser1692603718583",
            "ipip": {
              "ip": "116.25.47.239",
              "db_build": 1692153100,
              "country_name": "中国",
              "region_name": "广东",
              "isp_domain": "电信",
              "city_name": "深圳"
            },
            "action_detail": "",
            "content": "publisherStateUpdate [{\"state\":\"PUBLISH_REQUESTING\",\"streamID\":\"webrtc1692603746081\",\"errorCode\":0,\"extendedData\":\"\"}]",
            "path": "/data/log02/access-client-report.log.045",
            "host": "online-qcloud-ap-shanghai-4-vm-27795",
            "appid": 1739272706
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:42:26.870Z"
            ],
            "@timestamp": [
              "2023-08-21T07:42:26.169Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692603746870
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "Ic8MF4oBS6pkZxfQy_U-",
          "_version": 1,
          "_score": null,
          "_source": {
            "userName": "sampleUser1692603718583",
            "userid": "sample1692603718595",
            "roomid": "951753123",
            "time": "2023/08/21 15:43:47.640",
            "@type": "access-client-report",
            "content": "publisherStateUpdate [{\"state\":\"NO_PUBLISH\",\"streamID\":\"webrtc1692603812462\",\"errorCode\":0,\"extendedData\":\"\"}]",
            "action": "zc.al",
            "@version": "1",
            "path": "/data/log02/access-client-report.log.046",
            "appid": 1739272706,
            "level": "1",
            "action_detail": "",
            "server_time": 1692603827761,
            "sessionid": "913523282983030784",
            "@timestamp": "2023-08-21T07:43:47.761Z",
            "client_ip": "116.25.47.239",
            "host": "online-qcloud-ap-shanghai-5-vm-27813",
            "ipip": {
              "db_build": 1692153100,
              "country_name": "中国",
              "city_name": "深圳",
              "ip": "116.25.47.239",
              "region_name": "广东",
              "isp_domain": "电信"
            },
            "client_time": "2023-08-21T07:43:47.640Z"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:43:47.640Z"
            ],
            "@timestamp": [
              "2023-08-21T07:43:47.761Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692603827640
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "O88MF4oBS6pkZxfQy_U-",
          "_version": 1,
          "_score": null,
          "_source": {
            "userName": "sampleUser1692603718583",
            "userid": "sample1692603718595",
            "roomid": "951753123",
            "time": "2023/08/21 15:43:47.668",
            "@type": "access-client-report",
            "content": "roomStateChanged [\"951753123\",\"LOGOUT\",0,null]",
            "action": "zm.al",
            "@version": "1",
            "path": "/data/log02/access-client-report.log.046",
            "appid": 1739272706,
            "level": "1",
            "action_detail": "",
            "server_time": 1692603827762,
            "sessionid": "0",
            "@timestamp": "2023-08-21T07:43:47.762Z",
            "client_ip": "116.25.47.239",
            "host": "online-qcloud-ap-shanghai-5-vm-27813",
            "ipip": {
              "db_build": 1692153100,
              "country_name": "中国",
              "city_name": "深圳",
              "ip": "116.25.47.239",
              "region_name": "广东",
              "isp_domain": "电信"
            },
            "client_time": "2023-08-21T07:43:47.668Z"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:43:47.668Z"
            ],
            "@timestamp": [
              "2023-08-21T07:43:47.762Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692603827668
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "HXIMF4oBOsujsBmf2mze",
          "_version": 1,
          "_score": null,
          "_source": {
            "@version": "1",
            "host": "online-qcloud-ap-shanghai-5-vm-27811",
            "action": "zm.al",
            "userid": "sample1692603718595",
            "roomid": "951753123",
            "client_ip": "116.25.47.239",
            "level": "1",
            "time": "2023/08/21 15:43:51.305",
            "userName": "sampleUser1692603718583",
            "ipip": {
              "db_build": 1692153100,
              "ip": "116.25.47.239",
              "city_name": "深圳",
              "country_name": "中国",
              "isp_domain": "电信",
              "region_name": "广东"
            },
            "sessionid": "0",
            "server_time": 1692603831373,
            "path": "/data/log02/access-client-report.log.046",
            "@type": "access-client-report",
            "appid": 1739272706,
            "client_time": "2023-08-21T07:43:51.305Z",
            "action_detail": "",
            "content": "roomStateChanged [\"951753123\",\"LOGINING\",0,null]",
            "@timestamp": "2023-08-21T07:43:51.373Z"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:43:51.305Z"
            ],
            "@timestamp": [
              "2023-08-21T07:43:51.373Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692603831305
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "v00MF4oBFcUw68KE2kyh",
          "_version": 1,
          "_score": null,
          "_source": {
            "path": "/data/log02/access-client-report.log.046",
            "action_detail": "",
            "client_time": "2023-08-21T07:43:51.557Z",
            "action": "zm.al",
            "roomid": "951753123",
            "userid": "sample1692603718595",
            "ipip": {
              "ip": "116.25.47.239",
              "isp_domain": "电信",
              "country_name": "中国",
              "db_build": 1692153100,
              "city_name": "深圳",
              "region_name": "广东"
            },
            "content": "roomStateChanged [\"951753123\",\"LOGINED\",0,null]",
            "@version": "1",
            "time": "2023/08/21 15:43:51.557",
            "level": "1",
            "server_time": 1692603831611,
            "appid": 1739272706,
            "@type": "access-client-report",
            "userName": "sampleUser1692603718583",
            "host": "online-qcloud-ap-shanghai-5-vm-27816",
            "client_ip": "116.25.47.239",
            "@timestamp": "2023-08-21T07:43:51.611Z",
            "sessionid": "913523368068669440"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:43:51.557Z"
            ],
            "@timestamp": [
              "2023-08-21T07:43:51.611Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692603831557
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "9dMMF4oBAIJtnO4Y16dR",
          "_version": 1,
          "_score": null,
          "_source": {
            "level": "1",
            "userName": "sampleUser1692603718583",
            "@timestamp": "2023-08-21T07:43:51.701Z",
            "ipip": {
              "region_name": "广东",
              "isp_domain": "电信",
              "db_build": 1692153100,
              "city_name": "深圳",
              "ip": "116.25.47.239",
              "country_name": "中国"
            },
            "action_detail": "",
            "userid": "sample1692603718595",
            "time": "2023/08/21 15:43:51.620",
            "content": "publisherStateUpdate [{\"state\":\"PUBLISH_REQUESTING\",\"streamID\":\"webrtc1692603831618\",\"errorCode\":0,\"extendedData\":\"\"}]",
            "roomid": "951753123",
            "action": "zc.al",
            "client_ip": "116.25.47.239",
            "path": "/data/log02/access-client-report.log.011",
            "server_time": 1692603831701,
            "@version": "1",
            "host": "online-qcloud-ap-shanghai-4-vm-27834",
            "client_time": "2023-08-21T07:43:51.620Z",
            "@type": "access-client-report",
            "appid": 1739272706,
            "sessionid": "913523368068669440"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:43:51.620Z"
            ],
            "@timestamp": [
              "2023-08-21T07:43:51.701Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692603831620
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "XPUMF4oB_K1stJlI3sPa",
          "_version": 1,
          "_score": null,
          "_source": {
            "host": "online-qcloud-ap-shanghai-4-vm-27797",
            "client_time": "2023-08-21T07:43:52.205Z",
            "content": "publisherStateUpdate [{\"state\":\"PUBLISHING\",\"streamID\":\"webrtc1692603831618\",\"errorCode\":0,\"extendedData\":\"\"}]",
            "sessionid": "913523368068669440",
            "@version": "1",
            "appid": 1739272706,
            "client_ip": "116.25.47.239",
            "level": "1",
            "@timestamp": "2023-08-21T07:43:52.260Z",
            "roomid": "951753123",
            "time": "2023/08/21 15:43:52.205",
            "userid": "sample1692603718595",
            "server_time": 1692603832260,
            "userName": "sampleUser1692603718583",
            "@type": "access-client-report",
            "ipip": {
              "ip": "116.25.47.239",
              "region_name": "广东",
              "country_name": "中国",
              "city_name": "深圳",
              "isp_domain": "电信",
              "db_build": 1692153100
            },
            "action_detail": "",
            "action": "zc.al",
            "path": "/data/log01/access-client-report.log.046"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:43:52.205Z"
            ],
            "@timestamp": [
              "2023-08-21T07:43:52.260Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692603832205
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "HvgNF4oB_K1stJlIQB6o",
          "_version": 1,
          "_score": null,
          "_source": {
            "level": "1",
            "@timestamp": "2023-08-21T07:44:18.087Z",
            "client_time": "2023-08-21T07:44:18.330Z",
            "time": "2023/08/21 15:44:18.33",
            "userid": "sample1692603718595",
            "@type": "access-client-report",
            "action": "zm.al",
            "server_time": 1692603858087,
            "@version": "1",
            "client_ip": "116.25.47.239",
            "sessionid": "0",
            "roomid": "951753123",
            "userName": "sampleUser1692603718583",
            "ipip": {
              "ip": "116.25.47.239",
              "db_build": 1692153100,
              "country_name": "中国",
              "region_name": "广东",
              "isp_domain": "电信",
              "city_name": "深圳"
            },
            "action_detail": "",
            "content": "roomStateChanged [\"951753123\",\"LOGOUT\",0,null]",
            "path": "/data/log01/access-client-report.log.045",
            "host": "online-qcloud-ap-shanghai-4-vm-27795",
            "appid": 1739272706
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:44:18.330Z"
            ],
            "@timestamp": [
              "2023-08-21T07:44:18.087Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692603858330
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "_fgNF4oB_K1stJlIQB2o",
          "_version": 1,
          "_score": null,
          "_source": {
            "level": "1",
            "@timestamp": "2023-08-21T07:44:18.062Z",
            "client_time": "2023-08-21T07:44:18.800Z",
            "time": "2023/08/21 15:44:18.8",
            "userid": "sample1692603718595",
            "@type": "access-client-report",
            "action": "zc.al",
            "server_time": 1692603858062,
            "@version": "1",
            "client_ip": "116.25.47.239",
            "sessionid": "913523368068669440",
            "roomid": "951753123",
            "userName": "sampleUser1692603718583",
            "ipip": {
              "ip": "116.25.47.239",
              "db_build": 1692153100,
              "country_name": "中国",
              "region_name": "广东",
              "isp_domain": "电信",
              "city_name": "深圳"
            },
            "action_detail": "",
            "content": "publisherStateUpdate [{\"state\":\"NO_PUBLISH\",\"streamID\":\"webrtc1692603831618\",\"errorCode\":0,\"extendedData\":\"\"}]",
            "path": "/data/log01/access-client-report.log.045",
            "host": "online-qcloud-ap-shanghai-4-vm-27795",
            "appid": 1739272706
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:44:18.800Z"
            ],
            "@timestamp": [
              "2023-08-21T07:44:18.062Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692603858800
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "YYgQF4oBSH-UrhQvQF77",
          "_version": 1,
          "_score": null,
          "_source": {
            "action_detail": "",
            "sessionid": "0",
            "userid": "sample1692603718595",
            "ipip": {
              "db_build": 1692153100,
              "isp_domain": "电信",
              "country_name": "中国",
              "region_name": "广东",
              "city_name": "深圳",
              "ip": "116.25.47.239"
            },
            "level": "1",
            "roomid": "951753123",
            "client_time": "2023-08-21T07:47:34.134Z",
            "action": "zm.al",
            "appid": 1739272706,
            "content": "roomStateChanged [\"951753123\",\"LOGINING\",0,null]",
            "server_time": 1692604054196,
            "userName": "sampleUser1692603718583",
            "host": "online-qcloud-ap-shanghai-4-vm-27830",
            "@version": "1",
            "@type": "access-client-report",
            "time": "2023/08/21 15:47:34.134",
            "@timestamp": "2023-08-21T07:47:34.196Z",
            "client_ip": "116.25.47.239",
            "path": "/data/log02/access-client-report.log.045"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:47:34.134Z"
            ],
            "@timestamp": [
              "2023-08-21T07:47:34.196Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692604054134
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "pmAQF4oBSIkWtDIbPUXS",
          "_version": 1,
          "_score": null,
          "_source": {
            "client_ip": "116.25.47.239",
            "userid": "sample1692603718595",
            "@version": "1",
            "appid": 1739272706,
            "host": "online-qcloud-ap-shanghai-5-vm-27801",
            "server_time": 1692604054552,
            "client_time": "2023-08-21T07:47:34.496Z",
            "roomid": "951753123",
            "action_detail": "",
            "userName": "sampleUser1692603718583",
            "ipip": {
              "ip": "116.25.47.239",
              "db_build": 1692153100,
              "isp_domain": "电信",
              "city_name": "深圳",
              "country_name": "中国",
              "region_name": "广东"
            },
            "@timestamp": "2023-08-21T07:47:34.552Z",
            "@type": "access-client-report",
            "level": "1",
            "action": "zm.al",
            "content": "roomStateChanged [\"951753123\",\"LOGINED\",0,null]",
            "time": "2023/08/21 15:47:34.496",
            "sessionid": "913524303666896896",
            "path": "/data/log02/access-client-report.log.045"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:47:34.496Z"
            ],
            "@timestamp": [
              "2023-08-21T07:47:34.552Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692604054496
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "RVUQF4oBbfJ2zyJPREzb",
          "_version": 1,
          "_score": null,
          "_source": {
            "@type": "access-client-report",
            "client_time": "2023-08-21T07:47:35.800Z",
            "ipip": {
              "region_name": "广东",
              "db_build": 1692153100,
              "country_name": "中国",
              "ip": "116.25.47.239",
              "city_name": "深圳",
              "isp_domain": "电信"
            },
            "action": "zc.al",
            "@timestamp": "2023-08-21T07:47:35.855Z",
            "time": "2023/08/21 15:47:35.800",
            "userName": "sampleUser1692603718583",
            "level": "1",
            "path": "/data/log02/access-client-report.log.045",
            "roomid": "951753123",
            "client_ip": "116.25.47.239",
            "appid": 1739272706,
            "content": "publisherStateUpdate [{\"state\":\"PUBLISH_REQUESTING\",\"streamID\":\"webrtc1692604055796\",\"errorCode\":0,\"extendedData\":\"\"}]",
            "server_time": 1692604055855,
            "action_detail": "",
            "sessionid": "913524303666896896",
            "@version": "1",
            "userid": "sample1692603718595",
            "host": "online-qcloud-ap-shanghai-5-vm-27799"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:47:35.800Z"
            ],
            "@timestamp": [
              "2023-08-21T07:47:35.855Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692604055800
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "xB8QF4oBqHOCM2d-Rtyc",
          "_version": 1,
          "_score": null,
          "_source": {
            "appid": 1739272706,
            "action_detail": "",
            "path": "/data/log02/access-client-report.log.045",
            "ipip": {
              "country_name": "中国",
              "city_name": "深圳",
              "region_name": "广东",
              "isp_domain": "电信",
              "ip": "116.25.47.239",
              "db_build": 1692153100
            },
            "client_time": "2023-08-21T07:47:36.900Z",
            "sessionid": "913524303666896896",
            "server_time": 1692604056147,
            "host": "online-qcloud-ap-shanghai-4-vm-27792",
            "roomid": "951753123",
            "action": "zc.al",
            "client_ip": "116.25.47.239",
            "userid": "sample1692603718595",
            "@version": "1",
            "@timestamp": "2023-08-21T07:47:36.147Z",
            "userName": "sampleUser1692603718583",
            "level": "1",
            "time": "2023/08/21 15:47:36.90",
            "@type": "access-client-report",
            "content": "publisherStateUpdate [{\"state\":\"PUBLISHING\",\"streamID\":\"webrtc1692604055796\",\"errorCode\":0,\"extendedData\":\"\"}]"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:47:36.900Z"
            ],
            "@timestamp": [
              "2023-08-21T07:47:36.147Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692604056900
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "xzQRF4oBPO2POMS6CncW",
          "_version": 1,
          "_score": null,
          "_source": {
            "sessionid": "913524303666896896",
            "@type": "access-client-report",
            "ipip": {
              "ip": "116.25.47.239",
              "country_name": "中国",
              "db_build": 1692153100,
              "isp_domain": "电信",
              "city_name": "深圳",
              "region_name": "广东"
            },
            "content": "publisherStateUpdate [{\"state\":\"NO_PUBLISH\",\"streamID\":\"webrtc1692604055796\",\"errorCode\":0,\"extendedData\":\"\"}]",
            "time": "2023/08/21 15:48:26.365",
            "action": "zc.al",
            "client_time": "2023-08-21T07:48:26.365Z",
            "path": "/data/log02/access-client-report.log.045",
            "host": "online-qcloud-ap-shanghai-5-vm-27815",
            "appid": 1739272706,
            "roomid": "951753123",
            "@timestamp": "2023-08-21T07:48:26.445Z",
            "@version": "1",
            "client_ip": "116.25.47.239",
            "level": "1",
            "userName": "sampleUser1692603718583",
            "action_detail": "",
            "server_time": 1692604106445,
            "userid": "sample1692603718595"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:48:26.365Z"
            ],
            "@timestamp": [
              "2023-08-21T07:48:26.445Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692604106365
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "l3YRF4oBS-U1SGlNDAtf",
          "_version": 1,
          "_score": null,
          "_source": {
            "@timestamp": "2023-08-21T07:48:26.475Z",
            "sessionid": "0",
            "host": "online-qcloud-ap-shanghai-4-vm-27822",
            "userid": "sample1692603718595",
            "server_time": 1692604106475,
            "@type": "access-client-report",
            "appid": 1739272706,
            "action": "zm.al",
            "level": "1",
            "@version": "1",
            "action_detail": "",
            "client_ip": "116.25.47.239",
            "content": "roomStateChanged [\"951753123\",\"LOGOUT\",0,null]",
            "time": "2023/08/21 15:48:26.396",
            "roomid": "951753123",
            "userName": "sampleUser1692603718583",
            "client_time": "2023-08-21T07:48:26.396Z",
            "ipip": {
              "country_name": "中国",
              "city_name": "深圳",
              "db_build": 1692153100,
              "region_name": "广东",
              "ip": "116.25.47.239",
              "isp_domain": "电信"
            },
            "path": "/data/log01/access-client-report.log.045"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:48:26.396Z"
            ],
            "@timestamp": [
              "2023-08-21T07:48:26.475Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692604106396
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "eXsRF4oBS-U1SGlN_D85",
          "_version": 1,
          "_score": null,
          "_source": {
            "client_ip": "116.25.47.239",
            "userName": "sampleUser1692603718583",
            "roomid": "951753123",
            "sessionid": "0",
            "server_time": 1692604168343,
            "path": "/data/log02/access-client-report.log.045",
            "action": "zm.al",
            "appid": 1739272706,
            "time": "2023/08/21 15:49:28.288",
            "@version": "1",
            "@timestamp": "2023-08-21T07:49:28.343Z",
            "level": "1",
            "host": "online-qcloud-ap-shanghai-4-vm-27827",
            "action_detail": "",
            "content": "roomStateChanged [\"951753123\",\"LOGINING\",0,null]",
            "userid": "sample1692603718595",
            "@type": "access-client-report",
            "client_time": "2023-08-21T07:49:28.288Z",
            "ipip": {
              "db_build": 1692153100,
              "ip": "116.25.47.239",
              "region_name": "广东",
              "city_name": "深圳",
              "isp_domain": "电信",
              "country_name": "中国"
            }
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:49:28.288Z"
            ],
            "@timestamp": [
              "2023-08-21T07:49:28.343Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692604168288
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "bu8RF4oB91kCzyRi_NnB",
          "_version": 1,
          "_score": null,
          "_source": {
            "action": "zm.al",
            "time": "2023/08/21 15:49:28.423",
            "roomid": "951753123",
            "action_detail": "",
            "host": "online-qcloud-ap-shanghai-4-vm-27828",
            "@type": "access-client-report",
            "content": "roomStateChanged [\"951753123\",\"LOGINED\",0,null]",
            "ipip": {
              "country_name": "中国",
              "ip": "116.25.47.239",
              "city_name": "深圳",
              "region_name": "广东",
              "db_build": 1692153100,
              "isp_domain": "电信"
            },
            "path": "/data/log01/access-client-report.log.046",
            "userName": "sampleUser1692603718583",
            "appid": 1739272706,
            "server_time": 1692604168479,
            "client_ip": "116.25.47.239",
            "@timestamp": "2023-08-21T07:49:28.479Z",
            "client_time": "2023-08-21T07:49:28.423Z",
            "level": "1",
            "sessionid": "913524781477822464",
            "userid": "sample1692603718595",
            "@version": "1"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:49:28.423Z"
            ],
            "@timestamp": [
              "2023-08-21T07:49:28.479Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692604168423
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "KlQSF4oBJYGoDvniBZma",
          "_version": 1,
          "_score": null,
          "_source": {
            "path": "/data/log01/access-client-report.log.046",
            "action_detail": "",
            "client_time": "2023-08-21T07:49:29.749Z",
            "action": "zc.al",
            "roomid": "951753123",
            "userid": "sample1692603718595",
            "ipip": {
              "ip": "116.25.47.239",
              "isp_domain": "电信",
              "country_name": "中国",
              "db_build": 1692153100,
              "city_name": "深圳",
              "region_name": "广东"
            },
            "content": "publisherStateUpdate [{\"state\":\"PUBLISH_REQUESTING\",\"streamID\":\"webrtc1692604169745\",\"errorCode\":0,\"extendedData\":\"\"}]",
            "@version": "1",
            "time": "2023/08/21 15:49:29.749",
            "level": "1",
            "server_time": 1692604169804,
            "appid": 1739272706,
            "@type": "access-client-report",
            "userName": "sampleUser1692603718583",
            "host": "online-qcloud-ap-shanghai-5-vm-27816",
            "client_ip": "116.25.47.239",
            "@timestamp": "2023-08-21T07:49:29.804Z",
            "sessionid": "913524781477822464"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:49:29.749Z"
            ],
            "@timestamp": [
              "2023-08-21T07:49:29.804Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692604169749
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "4e0SF4oBS6pkZxfQBdQH",
          "_version": 1,
          "_score": null,
          "_source": {
            "@type": "access-client-report",
            "client_time": "2023-08-21T07:49:30.370Z",
            "ipip": {
              "region_name": "广东",
              "db_build": 1692153100,
              "country_name": "中国",
              "ip": "116.25.47.239",
              "city_name": "深圳",
              "isp_domain": "电信"
            },
            "action": "zc.al",
            "@timestamp": "2023-08-21T07:49:30.091Z",
            "time": "2023/08/21 15:49:30.37",
            "userName": "sampleUser1692603718583",
            "level": "1",
            "path": "/data/log01/access-client-report.log.045",
            "roomid": "951753123",
            "client_ip": "116.25.47.239",
            "appid": 1739272706,
            "content": "publisherStateUpdate [{\"state\":\"PUBLISHING\",\"streamID\":\"webrtc1692604169745\",\"errorCode\":0,\"extendedData\":\"\"}]",
            "server_time": 1692604170091,
            "action_detail": "",
            "sessionid": "913524781477822464",
            "@version": "1",
            "userid": "sample1692603718595",
            "host": "online-qcloud-ap-shanghai-5-vm-27799"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:49:30.370Z"
            ],
            "@timestamp": [
              "2023-08-21T07:49:30.091Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692604170370
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "z_QSF4oBIWivKjXMUZ_A",
          "_version": 1,
          "_score": null,
          "_source": {
            "server_time": 1692604190613,
            "appid": 1739272706,
            "userName": "sampleUser1692603718583",
            "host": "online-qcloud-ap-shanghai-5-vm-27798",
            "userid": "sample1692603718595",
            "level": "1",
            "roomid": "951753123",
            "sessionid": "913524781477822464",
            "@version": "1",
            "client_time": "2023-08-21T07:49:50.558Z",
            "@timestamp": "2023-08-21T07:49:50.613Z",
            "@type": "access-client-report",
            "content": "publisherStateUpdate [{\"state\":\"NO_PUBLISH\",\"streamID\":\"webrtc1692604169745\",\"errorCode\":0,\"extendedData\":\"\"}]",
            "ipip": {
              "ip": "116.25.47.239",
              "db_build": 1692153100,
              "country_name": "中国",
              "city_name": "深圳",
              "isp_domain": "电信",
              "region_name": "广东"
            },
            "action_detail": "",
            "action": "zc.al",
            "time": "2023/08/21 15:49:50.558",
            "path": "/data/log01/access-client-report.log.045",
            "client_ip": "116.25.47.239"
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:49:50.558Z"
            ],
            "@timestamp": [
              "2023-08-21T07:49:50.613Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zc.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692604190558
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "xsQSF4oBSM8ItoL_Udzq",
          "_version": 1,
          "_score": null,
          "_source": {
            "path": "/data/log02/access-client-report.log.046",
            "time": "2023/08/21 15:49:50.587",
            "userid": "sample1692603718595",
            "client_time": "2023-08-21T07:49:50.587Z",
            "sessionid": "0",
            "content": "roomStateChanged [\"951753123\",\"LOGOUT\",0,null]",
            "appid": 1739272706,
            "client_ip": "116.25.47.239",
            "server_time": 1692604190644,
            "@type": "access-client-report",
            "userName": "sampleUser1692603718583",
            "roomid": "951753123",
            "action_detail": "",
            "@version": "1",
            "level": "1",
            "@timestamp": "2023-08-21T07:49:50.644Z",
            "action": "zm.al",
            "host": "online-qcloud-ap-shanghai-4-vm-27831",
            "ipip": {
              "region_name": "广东",
              "ip": "116.25.47.239",
              "country_name": "中国",
              "db_build": 1692153100,
              "city_name": "深圳",
              "isp_domain": "电信"
            }
          },
          "fields": {
            "client_time": [
              "2023-08-21T07:49:50.587Z"
            ],
            "@timestamp": [
              "2023-08-21T07:49:50.644Z"
            ]
          },
          "highlight": {
            "action": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "action.keyword": [
              "@kibana-highlighted-field@zm.al@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692604190587
          ]
        },
        {
          "_index": "sdk-mixed:.ds-zds-access-client-report-2023.08.21-000796",
          "_type": "_doc",
          "_id": "KpROF4oBqHOCM2d-ZjYP",
          "_version": 1,
          "_score": null,
          "_source": {
            "path": "/data/log01/access-client-report.log.045",
            "level": "1",
            "content": "unload",
            "@type": "access-client-report",
            "server_time": 1692608122757,
            "sessionid": "0",
            "action_detail": "全局事件",
            "userid": "sample1692603718595",
            "client_ip": "116.25.47.239",
            "host": "online-qcloud-ap-shanghai-4-vm-27824",
            "ipip": {
              "isp_domain": "电信",
              "ip": "116.25.47.239",
              "country_name": "中国",
              "db_build": 1692153100,
              "region_name": "广东",
              "city_name": "深圳"
            },
            "time": "2023/08/21 16:55:22.644",
            "action": "zm.wl",
            "@timestamp": "2023-08-21T08:55:22.757Z",
            "appid": 1739272706,
            "userName": "sampleUser1692603718583",
            "client_time": "2023-08-21T08:55:22.644Z",
            "roomid": "951753123",
            "@version": "1"
          },
          "fields": {
            "client_time": [
              "2023-08-21T08:55:22.644Z"
            ],
            "@timestamp": [
              "2023-08-21T08:55:22.757Z"
            ]
          },
          "highlight": {
            "content.keyword": [
              "@kibana-highlighted-field@unload@/kibana-highlighted-field@"
            ],
            "userid": [
              "@kibana-highlighted-field@sample1692603718595@/kibana-highlighted-field@"
            ],
            "content": [
              "@kibana-highlighted-field@unload@/kibana-highlighted-field@"
            ]
          },
          "sort": [
            1692608122644
          ]
        }
      ]
    },
    "aggregations": {
      "2": {
        "buckets": [
          {
            "key_as_string": "2023-08-21T15:30:00.000+08:00",
            "key": 1692603000000,
            "doc_count": 23
          },
          {
            "key_as_string": "2023-08-21T16:30:00.000+08:00",
            "key": 1692606600000,
            "doc_count": 1
          }
        ]
      }
    }
  }

  setLogHits(data.hits.hits);