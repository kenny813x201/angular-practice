import { Component, OnInit, HostListener } from '@angular/core';

import * as joint from 'jointjs';
declare const _;






@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})


export class TopoComponent implements OnInit {

  data1 =
    [
      {
        "name": "OrderDW(Large)",
        "dataMarts": [
          {
            "name": "OrderMart",
            "virtualDataSources": [
              {
                "name": "ORCL",
                "physicalDataSource": {
                  "name": "ORACLE",
                  "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                  "driver": "com.amazon.redshift.jdbc.Driver"
                }
              },
              {
                "name": "TRDT",
                "physicalDataSource": {
                  "name": "TERADATA",
                  "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                  "driver": "com.amazon.redshift.jdbc.Driver"
                }
              }
            ],
            "databases": [
              {
                "name": "DB01",
              }
            ]
          },
          {
            "name": "MerchantMart",
            "virtualDataSources": [
              {
                "name": "TRDT",
                "physicalDataSource": {
                  "name": "TERADATA",
                  "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                  "driver": "com.amazon.redshift.jdbc.Driver"
                }
              }
            ],
            "databases": [
              {
                "name": "DB03",
              }
            ]
          }
        ],
        "databases": [
          {
            "name": "DB03",
          }
        ],
        "permanentView": [
        ],
        "virtualDataSource": [
        ]
      },
      {
        "name": "CRM_DW(Medium)",
        "dataMarts": [
          {
            "name": "Customer",
            "virtualDataSources": [
              {
                "name": "TRDT",
                "physicalDataSource": {
                  "name": "TERADATA",
                  "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                  "driver": "com.amazon.redshift.jdbc.Driver"
                }
              },
              {
                "name": "POSTGRES",
                "physicalDataSource": {
                  "name": "POSTGRESQL",
                  "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                  "driver": "com.amazon.redshift.jdbc.Driver"
                }
              }
            ],
            "databases": [
              {
                "name": "DB02",
              }
            ]
          }
        ],
        "databases": [
          {
            "name": "DB01",
          }
        ],
        "permanentView": [
          {
            "name": "CAMPAIGN",
          },
          {
            "name": "FEEDBACK",
          }
        ],
        "virtualDataSource": [
        ]
      },
      {
        "name": "MerchantDW(Small)",
        "dataMarts": [
          {
            "name": "MerchantMart",
            "virtualDataSources": [
              {
                "name": "TRDT",
                "physicalDataSource": {
                  "name": "TERADATA",
                  "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                  "driver": "com.amazon.redshift.jdbc.Driver"
                }
              }
            ],
            "databases": [
              {
                "name": "DB01",
              },
              {
                "name": "DB02",
              }

            ]
          }
        ],
        "databases": [
        ],
        "permanentView": [
        ],
        "virtualDataSource": [
          {
            "name": "ORCL",
            "physicalDataSource": {
              "name": "ORACLE",
              "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
              "driver": "com.amazon.redshift.jdbc.Driver"
            }
          }
        ]
      }
    ];
  data = [
    {
      "name": "TEST1",
      "datamarts": [],
      "databases": [],
      "permanentView": [],
      "datasources": [
        {
          "name": "AZURE_POSTGRES",
          "target": {
            "url": "jdbc:postgresql://postgresql-testdata-server.postgres.database.azure.com:5432/testdb",
            "driver": "org.postgresql.Driver"
          }
        }
      ]
    },
    {
      "name": "NEWDW",
      "datamarts": [],
      "databases": [],
      "permanentView": [],
      "datasources": [
        {
          "name": "AZURE_MSSQL",
          "target": {
            "url": "jdbc:sqlserver://microsoftsqlserver.database.windows.net:1433 ",
            "driver": "com.microsoft.sqlserver.jdbc.SQLServerDriver"
          }
        },
        {
          "name": "AZURE_POSTGRES",
          "target": {
            "url": "jdbc:postgresql://postgresql-testdata-server.postgres.database.azure.com:5432/testdb",
            "driver": "org.postgresql.Driver"
          }
        }
      ]
    },
    {
      "name": "TEST01",
      "datamarts": [
        {
          "name": "DMTEST02",
          "datasources": [
            {
              "name": "AWS_ORCL",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            }
          ],
          "databases": []
        },
        {
          "name": "zanetest",
          "datasources": [
            {
              "name": "AWS_ORCL",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            }
          ],
          "databases": []
        }
      ],
      "databases": [
        {
          "name": "TPCH_S3"
        }
      ],
      "permanentView": [
        {
          "name": "TEST00"
        }
      ],
      "datasources": [
        {
          "name": "AZURE_POSTGRES2",
          "target": {
            "url": "jdbc:postgresql://postgresql-testdata-server.postgres.database.azure.com:5432/testdb",
            "driver": "org.postgresql.Driver"
          }
        },
        {
          "name": "AZURE_POSTGRES",
          "target": {
            "url": "jdbc:postgresql://postgresql-testdata-server.postgres.database.azure.com:5432/testdb",
            "driver": "org.postgresql.Driver"
          }
        }
      ]
    },
    {
      "name": "TESTMONITORING1",
      "datamarts": [],
      "databases": [
        {
          "name": "TESTDB"
        },
        {
          "name": "TPCH_AZBLB"
        },
        {
          "name": "TPCH_S3"
        }
      ],
      "permanentView": [],
      "datasources": [
        {
          "name": "AWS_ORCL",
          "target": {
            "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
            "driver": "com.amazon.redshift.jdbc.Driver"
          }
        },
        {
          "name": "AWS_TRDT",
          "target": {
            "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
            "driver": "com.amazon.redshift.jdbc.Driver"
          }
        },
        {
          "name": "AZURE_MSSQL",
          "target": {
            "url": "jdbc:sqlserver://microsoftsqlserver.database.windows.net:1433 ",
            "driver": "com.microsoft.sqlserver.jdbc.SQLServerDriver"
          }
        },
        {
          "name": "AZURE_POSTGRES",
          "target": {
            "url": "jdbc:postgresql://postgresql-testdata-server.postgres.database.azure.com:5432/testdb",
            "driver": "org.postgresql.Driver"
          }
        }
      ]
    },
    {
      "name": "TESTPARSER",
      "datamarts": [
        {
          "name": "ordermart",
          "datasources": [
            {
              "name": "AZURE_MSSQL",
              "target": {
                "url": "jdbc:sqlserver://microsoftsqlserver.database.windows.net:1433 ",
                "driver": "com.microsoft.sqlserver.jdbc.SQLServerDriver"
              }
            },
            {
              "name": "AWS_TRDT",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            },
            {
              "name": "AWS_ORCL",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            }
          ],
          "databases": [
            {
              "name": "TPCH_S3"
            }
          ]
        },
        {
          "name": "zanetest",
          "datasources": [
            {
              "name": "AWS_ORCL",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            }
          ],
          "databases": []
        }
      ],
      "databases": [
        {
          "name": "TPCH_AZBLB"
        },
        {
          "name": "TPCH_S3"
        }
      ],
      "permanentView": [
        {
          "name": "TESTPV01"
        },
        {
          "name": "TEST00"
        }
      ],
      "datasources": [
        {
          "name": "AWS_ORCL",
          "target": {
            "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
            "driver": "com.amazon.redshift.jdbc.Driver"
          }
        },
        {
          "name": "AWS_TRDT",
          "target": {
            "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
            "driver": "com.amazon.redshift.jdbc.Driver"
          }
        },
        {
          "name": "AZURE_MSSQL",
          "target": {
            "url": "jdbc:sqlserver://microsoftsqlserver.database.windows.net:1433 ",
            "driver": "com.microsoft.sqlserver.jdbc.SQLServerDriver"
          }
        }
      ]
    },
    {
      "name": "TEST03",
      "datamarts": [
        {
          "name": "ordermart",
          "datasources": [
            {
              "name": "AZURE_MSSQL",
              "target": {
                "url": "jdbc:sqlserver://microsoftsqlserver.database.windows.net:1433 ",
                "driver": "com.microsoft.sqlserver.jdbc.SQLServerDriver"
              }
            },
            {
              "name": "AWS_TRDT",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            },
            {
              "name": "AWS_ORCL",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            }
          ],
          "databases": [
            {
              "name": "TPCH_S3"
            }
          ]
        },
        {
          "name": "zanetest",
          "datasources": [
            {
              "name": "AWS_ORCL",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            }
          ],
          "databases": []
        }
      ],
      "databases": [
        {
          "name": "TPCH_AZBLB"
        }
      ],
      "permanentView": [
        {
          "name": "TESTPV"
        }
      ],
      "datasources": [
        {
          "name": "AWS_TRDT",
          "target": {
            "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
            "driver": "com.amazon.redshift.jdbc.Driver"
          }
        }
      ]
    },
    {
      "name": "TESTADMIN",
      "datamarts": [
        {
          "name": "zanetest",
          "datasources": [
            {
              "name": "AWS_ORCL",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            }
          ],
          "databases": []
        },
        {
          "name": "ordermart",
          "datasources": [
            {
              "name": "AZURE_MSSQL",
              "target": {
                "url": "jdbc:sqlserver://microsoftsqlserver.database.windows.net:1433 ",
                "driver": "com.microsoft.sqlserver.jdbc.SQLServerDriver"
              }
            },
            {
              "name": "AWS_TRDT",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            },
            {
              "name": "AWS_ORCL",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            }
          ],
          "databases": [
            {
              "name": "TPCH_S3"
            }
          ]
        }
      ],
      "databases": [
        {
          "name": "TPCH_AZBLB"
        }
      ],
      "permanentView": [],
      "datasources": [
        {
          "name": "AZURE_POSTGRES2",
          "target": {
            "url": "jdbc:postgresql://postgresql-testdata-server.postgres.database.azure.com:5432/testdb",
            "driver": "org.postgresql.Driver"
          }
        }
      ]
    },
    {
      "name": "TEST04",
      "datamarts": [
        {
          "name": "ordermart",
          "datasources": [
            {
              "name": "AZURE_MSSQL",
              "target": {
                "url": "jdbc:sqlserver://microsoftsqlserver.database.windows.net:1433 ",
                "driver": "com.microsoft.sqlserver.jdbc.SQLServerDriver"
              }
            },
            {
              "name": "AWS_TRDT",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            },
            {
              "name": "AWS_ORCL",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            }
          ],
          "databases": [
            {
              "name": "TPCH_S3"
            }
          ]
        },
        {
          "name": "zanetest",
          "datasources": [
            {
              "name": "AWS_ORCL",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            }
          ],
          "databases": []
        }
      ],
      "databases": [
        {
          "name": "TPCH_AZBLB"
        }
      ],
      "permanentView": [
        {
          "name": "TEST00"
        },
        {
          "name": "TESTPV"
        }
      ],
      "datasources": [
        {
          "name": "AWS_TRDT",
          "target": {
            "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
            "driver": "com.amazon.redshift.jdbc.Driver"
          }
        }
      ]
    },
    {
      "name": "TEST02",
      "datamarts": [
        {
          "name": "zanetest",
          "datasources": [
            {
              "name": "AWS_ORCL",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            }
          ],
          "databases": []
        },
        {
          "name": "ordermart",
          "datasources": [
            {
              "name": "AZURE_MSSQL",
              "target": {
                "url": "jdbc:sqlserver://microsoftsqlserver.database.windows.net:1433 ",
                "driver": "com.microsoft.sqlserver.jdbc.SQLServerDriver"
              }
            },
            {
              "name": "AWS_TRDT",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            },
            {
              "name": "AWS_ORCL",
              "target": {
                "url": "jdbc:postgresql://zetaris.cyzoanxzdpje.ap-southeast-2.redshift.amazonaws.com:5439/zetredshift",
                "driver": "com.amazon.redshift.jdbc.Driver"
              }
            }
          ],
          "databases": [
            {
              "name": "TPCH_S3"
            }
          ]
        }
      ],
      "databases": [
        {
          "name": "TPCH_AZBLB"
        }
      ],
      "permanentView": [
        {
          "name": "TESTPV"
        }
      ],
      "datasources": [
        {
          "name": "AZURE_MSSQL",
          "target": {
            "url": "jdbc:sqlserver://microsoftsqlserver.database.windows.net:1433 ",
            "driver": "com.microsoft.sqlserver.jdbc.SQLServerDriver"
          }
        },
        {
          "name": "AZURE_POSTGRES2",
          "target": {
            "url": "jdbc:postgresql://postgresql-testdata-server.postgres.database.azure.com:5432/testdb",
            "driver": "org.postgresql.Driver"
          }
        }
      ]
    }
  ]

  map = new Map();
  config = {
    'color': {
      'dataMart': 'green',
      'dataWarehouse': 'purple',
      'database': 'black',
      'permanentView': 'blue',
      'virtualDataSource': 'red',
      'target': 'gray'
    },
    'fontSize': 12
  };
  nodeNumbers = [0, 0, 0, 0];
  graph;
  paper;
  width;
  height;


  constructor() { }

  ngOnInit() {
    this.generateMap();
    this.getHeight();
    this.defineGraphPaper();
    this.addGraph();
    this.draw();
    this.hover();
    this.buttonClicked();
    this.createTestNode()
  }

  prepareData(tempDw, dataWarehouse, type, originalKey) {
    for (let el of dataWarehouse[originalKey]) {
      // add the direct link from data warehouse
      tempDw["to"].push(el['name']);
      if (this.map.has(el['name'])) {
        continue;
      }
      let temp = {
        "type": type,
        "to": []
      }
      if (originalKey == "datasources") {
        let tempVds = {
          "type": "virtualDataSource",
          "to": [el["target"]['driver']]
        }
        this.map.set(el['name'], tempVds);
        let tempPds = {
          "type": "target"
        }
        this.map.set(el["target"]['driver'], tempPds);
        continue;
      }
      if (originalKey == "datamarts") {
        // add to virtual ds and to physical ds 
        for (let e of el["datasources"]) {
          let tempVds = {
            "type": "virtualDataSource",
            "to": [e["target"]['driver']]
          }
          this.map.set(e['name'], tempVds);
          let tempPds = {
            "type": "target"
          }
          this.map.set(e["target"]['driver'], tempPds);
          temp["to"].push(e["name"]);
        }
        for (let e of el["databases"]) {
          let tempDb = {
            "type": "database"
          }
          this.map.set(e['name'], tempDb);
          temp["to"].push(e["name"]);
          continue;
        }
      }
      this.map.set(el['name'], temp);
    }
  }

  generateMap() {
    for (let dw of this.data) {
      let tempDw = {
        "type": "dataWarehouse",
        "to": []
      }
      this.prepareData(tempDw, dw, 'dataMart', 'datamarts');
      this.prepareData(tempDw, dw, 'database', 'databases');
      this.prepareData(tempDw, dw, 'permanentView', 'permanentView');
      this.prepareData(tempDw, dw, 'virtualDataSource', 'datasources');
      this.map.set(dw['name'], tempDw);
    }

    console.log("finish map");
    console.log(this.map);
  }

  getHeight() {
    this.map.forEach((value, key) => {
      if (value['type'] == "dataWarehouse") {
        this.nodeNumbers[0] += 1;
      }
      if (value['type'] == "dataMart") {
        this.nodeNumbers[1] += 1;
      }
      if (value['type'] == "database") {
        this.nodeNumbers[2] += 1;
      }
      if (value['type'] == "permanentView") {
        this.nodeNumbers[1] += 1;
      }
      if (value['type'] == "virtualDataSource") {
        this.nodeNumbers[2] += 1;
      }
      if (value['type'] == "target") {
        this.nodeNumbers[3] += 1;
      }
    })
    const height = Math.max(...this.nodeNumbers) * 130 + 50;
    this.height = Math.max(height, 600);
  }

  defineGraphPaper() {
    this.width = document.getElementById('main-paper').offsetWidth;
    // this.height = document.getElementById('main-paper').offsetHeight;
    this.graph = new joint.dia.Graph;
    this.paper = new joint.dia.Paper({
      el: document.getElementById('main-paper'),
      model: this.graph,
      width: '100%',
      height: `${this.height}px`,
      gridSize: 1,

    });
    this.paper.scaleContentToFit();
  }

  createTestNode() {
  }

  createNode(type, name) {
    var CustomCircle = joint.shapes.standard.Circle.define('topo.CustomElement', {
      attrs: {
        body: {
          refWidth: '100%',
          refHeight: '100%',
          strokeWidth: 0.5,
          stroke: 'black',
        },
        label: {
          textVerticalAnchor: 'middle',
          textAnchor: 'middle',
          refX: '50%',
          refY: '50%',
          fontSize: this.config['fontSize'],
          fill: 'black'
        },
        button: {
          cursor: 'pointer',
          ref: 'buttonLabel',
          refWidth: '150%',
          refHeight: '150%',
          strokeWidth: 1,
          refX: '50%',
          refY: '50%',
          r: 10
        },
        buttonLabel: {
          pointerEvents: 'none',
          refX: '85%',
          refY: '15%',
          textAnchor: 'middle',
          textVerticalAnchor: 'middle'
        }
      }
    }, {
        markup: [{
          tagName: 'circle',
          selector: 'body',
        }, {
          tagName: 'text',
          selector: 'label'
        }, {
          tagName: 'circle',
          selector: 'button'
        }, {
          tagName: 'text',
          selector: 'buttonLabel'
        }]
      });

    if (type == "dataMart") {
      var circle = new CustomCircle();
      circle.resize(100, 100);
      circle.attr({
        label: {
          pointerEvents: 'none',
          visibility: 'visible',
          text: joint.util.breakText(name, { width: 120 }),
          fontSize: this.config['fontSize'],
          fill: 'white'
        },
        body: {
          cursor: 'default',
          visibility: 'visible',
          fill: this.config['color'][type]
        },
        button: {
          event: 'element:button:pointerdown',
          fill: 'white',
          stroke: 'black',
          strokeWidth: 1,
        },
        buttonLabel: {
          text: '＋', // fullwidth underscore
          fill: 'black',
          fontSize: 10,
          fontWeight: 'bold'
        }
      });
      circle.addTo(this.graph);
      return circle;
    } else if (type != "permanentView") {
      var circle = new joint.shapes.standard.Circle();
      circle.resize(100, 100);
      circle.attr({
        body: {
          fill: this.config['color'][type],
          strokeWidth: 0.5,
        },
        label: {
          text: joint.util.breakText(name, { width: 120 }),
          fontSize: this.config['fontSize'],
          fill: 'white'
        }
      });
      return circle;
    }
    else {
      var rect = new joint.shapes.standard.Rectangle();
      rect.resize(100, 60);
      rect.attr({
        body: {
          fill: this.config['color'][type],
          refWidth: '100%',
          refHeight: '100%',
          strokeWidth: 0.5,
        },
        label: {
          text: joint.util.breakText(name, { width: 90 }),
          fontSize: this.config['fontSize'],
          fill: 'white'
        }
      });
      return rect;
    }
  }

  addGraph() {
    this.map.forEach((value, key) => {
      if (value['type'] == "dataWarehouse") {
        const node = this.createNode(value['type'], key)
        this.map.get(key)["graph"] = node;
      }
      if (value['type'] == "dataMart") {
        const node = this.createNode(value['type'], key)
        this.map.get(key)["graph"] = node;
      }
      if (value['type'] == "database") {
        const node = this.createNode(value['type'], key)
        this.map.get(key)["graph"] = node;
      }
      if (value['type'] == "permanentView") {
        const node = this.createNode(value['type'], key)
        this.map.get(key)["graph"] = node;
      }
      if (value['type'] == "virtualDataSource") {
        const node = this.createNode(value['type'], key)
        this.map.get(key)["graph"] = node;
      }
      if (value['type'] == "target") {
        const node = this.createNode(value['type'], key)
        this.map.get(key)["graph"] = node;
      }
    });

    console.log("add graph");
    console.log(this.map);
  }



  drawNode(nodeGraph, x, y) {
    nodeGraph.position(x, y);
    nodeGraph.addTo(this.graph);
  }

  createSingleLinks(source, target) {
    let link = new joint.shapes.standard.Link();
    link.source(source, {
      anchor: {
        name: 'topRight',
        args: {
          rotate: true,
          dx: 0,
          dy: '50%'
        }
      }
    });
    link.target(target, {
      anchor: {
        name: 'topLeft',
        args: {
          rotate: true,
          dx: 0,
          dy: '50%'
        }
      }
    });
    link.attr({
      line: {
        stroke: '#000000',
        opacity: 1,
        strokeWidth: 1
      }
    });
    link.addTo(this.graph);
    link.toBack();
  }

  createNodeLinks(key, node) {
    for (let to of node["to"]) {
      this.createSingleLinks(node['graph'], this.map.get(to)['graph']);
    }
  }

  incrementY(currentY, index) {
    return currentY + this.height / (this.nodeNumbers[index] + 1);
  }

  getX(column) {
    return this.width / 6 * column;
  }

  draw() {
    let dwX = this.getX(1);
    let dwY = -20;
    let dmX = this.getX(2);
    let dmY = -20;
    let dbX = this.getX(3);
    let dbY = -20;
    let pdsX = this.getX(4);
    let pdsY = -20;


    this.map.forEach((value, key) => {
      if (value['type'] == "dataWarehouse") {
        const nodeGraph = this.map.get(key)["graph"];
        this.drawNode(nodeGraph, dwX, this.incrementY(dwY, 0));
        dwY = this.incrementY(dwY, 0);
      }
      if (value['type'] == "dataMart") {
        const nodeGraph = this.map.get(key)["graph"];
        this.drawNode(nodeGraph, dmX, this.incrementY(dmY, 1));
        dmY = this.incrementY(dmY, 1);
      }
      if (value['type'] == "permanentView") {
        const nodeGraph = this.map.get(key)["graph"];
        this.drawNode(nodeGraph, dmX, this.incrementY(dmY, 1));
        dmY = this.incrementY(dmY, 1);
      }
      if (value['type'] == "virtualDataSource") {
        const nodeGraph = this.map.get(key)["graph"];
        this.drawNode(nodeGraph, dbX, this.incrementY(dbY, 2));
        dbY = this.incrementY(dbY, 2);
      }
      if (value['type'] == "database") {
        const nodeGraph = this.map.get(key)["graph"];

        this.drawNode(nodeGraph, dbX, this.incrementY(dbY, 2));
        dbY = this.incrementY(dbY, 2);
      }
      if (value['type'] == "target") {
        const nodeGraph = this.map.get(key)["graph"];
        this.drawNode(nodeGraph, pdsX, this.incrementY(pdsY, 3));
        pdsY = this.incrementY(pdsY, 3);
      }

    });

    this.map.forEach((value, key) => {
      if (value['type'] == "dataWarehouse") {
        this.createNodeLinks(key, this.map.get(key));
      }
      if (value['type'] == "dataMart") {
        this.createNodeLinks(key, this.map.get(key));
      }
      if (value['type'] == "virtualDataSource") {
        this.createNodeLinks(key, this.map.get(key));
      }
    })

    console.log("draw, add position");
    console.log(this.map);
  }

  hover() {
    this.paper.on('element:mouseenter', (elementView) => {
      let cell = this.graph.getCell(elementView.model.cid);
      let elements = this.graph.getElements();
      let predecessors = this.graph.getPredecessors(cell);
      let successors = this.graph.getSuccessors(cell);
      for (let element of elements) {
        if (!(predecessors.includes(element)) && !(successors.includes(element)) && element.cid != cell.cid) {
          element.attr({
            body: {
              opacity: 0.2
            },
            button: {
              opacity: 0.2
            },
            buttonLabel: {
              opacity: 0.2
            }
          });
        }
        element.addTo(this.graph);
      }
      let links = this.graph.getLinks();
      for (let link of links) {
        link.attr({
          line: {
            stroke: '#000000',
            opacity: 0.05,
            strokeWidth: 1
          }
        });
        link.addTo(this.graph);
      }
      let connectedLinks = this.graph.getConnectedLinks(cell);;
      for (let pre of predecessors) {
        let preLinks = this.graph.getConnectedLinks(pre, { inbound: true });
        connectedLinks.push(...preLinks);
      }
      for (let suc of successors) {
        let sucLinks = this.graph.getConnectedLinks(suc, { outbound: true });
        connectedLinks.push(...sucLinks);
      }
      for (let link of connectedLinks) {
        link.attr({
          line: {
            stroke: '#000000',
            opacity: 1,
            strokeWidth: 1
          }
        });
        link.addTo(this.graph);
      }
    });

    this.paper.on('element:mouseleave', (elementView) => {
      let cell = this.graph.getCell(elementView.model.cid);
      let elements = this.graph.getElements();
      let neighbors = this.graph.getNeighbors(cell, { deep: true, includeEnclosed: true });
      for (let element of elements) {
        if (!(neighbors.includes(element)) && element.cid != cell.cid) {
          element.attr({
            body: {
              opacity: 1
            },
            button: {
              opacity: 1
            },
            buttonLabel: {
              opacity: 1
            }
          });
        }
        element.addTo(this.graph);
      }
      for (let element of elements) {
        if (element.cid != cell.cid) {
          element.attr({
            body: {
              opacity: 1
            }
          });
        }
        element.addTo(this.graph);
      }
      let links = this.graph.getLinks();
      for (let link of links) {
        link.attr({
          line: {
            stroke: '#000000',
            opacity: 1,
            strokeWidth: 1
          }
        });
        link.addTo(this.graph);
      }
    });
  }

  buttonClicked() {
    this.paper.on('element:button:pointerdown', (elementView, evt) => {
      evt.stopPropagation(); // stop any further actions with the element view (e.g. dragging)
      let cell = this.graph.getCell(elementView.model.cid);
      let name;
      this.map.forEach((value, key) => {
        if (value['graph']['cid'] == elementView.model.cid) {
          name = key
        }
      })
      console.log(name);
      // show the selected cell's unique name
      // trigger the modal here
    });
  }
}


