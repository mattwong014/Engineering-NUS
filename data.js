var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.7561561521010063,
        "pitch": 0.07290883427110373,
        "fov": 1.4210867929104314
      },
      "linkHotspots": [
        {
          "yaw": -0.8080519056188642,
          "pitch": 0.00043564094175074786,
          "rotation": 12.566370614359176,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6149617802046077,
          "pitch": 0.2282449618321447,
          "title": "Welcome to FoE",
          "text": "The Faculty of Engineering has many students."
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 3.131470311255651,
        "pitch": 0.009991496389551102,
        "fov": 1.4210867929104314
      },
      "linkHotspots": [
        {
          "yaw": 3.118296263611242,
          "pitch": -0.018193026527235645,
          "rotation": 0,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4373778971742528,
          "pitch": -0.004279212184778558,
          "title": "Engineering Auditorium Atrium",
          "text": "This is a popular study spot for Engineering students."
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.03706421951675409,
        "pitch": -0.05867713209435799,
        "fov": 1.4210867929104314
      },
      "linkHotspots": [
        {
          "yaw": 0.08002617033508308,
          "pitch": -0.0018336603779331995,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        },
        {
          "yaw": -0.9263406322008318,
          "pitch": -0.014979270992659721,
          "rotation": 4.71238898038469,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3481180596579314,
          "pitch": -0.003065065181516502,
          "title": "Engineering Auditorium",
          "text": "This is where your lectures are conducted."
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
