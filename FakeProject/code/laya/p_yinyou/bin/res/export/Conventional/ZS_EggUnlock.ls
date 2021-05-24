{
	"version":"LAYASCENE3D:02",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"ZS_EggUnlock",
			"ambientColor":[
				0.4625756,
				0.5505221,
				0.7264151
			],
			"ambientMode":0,
			"ambientSphericalHarmonicsIntensity":1,
			"lightmaps":[],
			"enableFog":false,
			"fogStart":0,
			"fogRange":300,
			"fogColor":[
				0.5,
				0.5,
				0.5
			]
		},
		"child":[
			{
				"type":"Sprite3D",
				"instanceID":0,
				"props":{
					"name":"ZS_01",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0,
						0
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					]
				},
				"components":[],
				"child":[
					{
						"type":"Sprite3D",
						"instanceID":1,
						"props":{
							"name":"daCamera",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0.501,
								0
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								1,
								1,
								1
							]
						},
						"components":[],
						"child":[
							{
								"type":"Camera",
								"instanceID":2,
								"props":{
									"name":"Camera",
									"active":true,
									"isStatic":false,
									"layer":0,
									"position":[
										0,
										1.69,
										2.537
									],
									"rotation":[
										-0.1045285,
										-1.862277E-07,
										-1.957332E-08,
										0.9945219
									],
									"scale":[
										1,
										1,
										1
									],
									"clearFlag":0,
									"orthographic":false,
									"orthographicVerticalSize":10,
									"fieldOfView":60,
									"enableHDR":false,
									"nearPlane":0.3,
									"farPlane":1000,
									"viewport":[
										0,
										0,
										1,
										1
									],
									"clearColor":[
										0.1568628,
										0.4156863,
										0.8588236,
										0
									]
								},
								"components":[],
								"child":[]
							}
						]
					},
					{
						"type":"DirectionLight",
						"instanceID":3,
						"props":{
							"name":"Directional Light",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								3.671,
								1.41
							],
							"rotation":[
								-0.0201697,
								0.4814091,
								0.8758397,
								-0.02726434
							],
							"scale":[
								1,
								1,
								1
							],
							"intensity":1,
							"lightmapBakedType":0,
							"color":[
								1,
								1,
								1
							]
						},
						"components":[],
						"child":[]
					},
					{
						"type":"Sprite3D",
						"instanceID":4,
						"props":{
							"name":"xuanzhuan",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0.28,
								0
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								1.074,
								1.074,
								1.074
							]
						},
						"components":[],
						"child":[
							{
								"type":"Sprite3D",
								"instanceID":5,
								"props":{
									"name":"jiaose",
									"active":true,
									"isStatic":false,
									"layer":0,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0,
										0,
										0,
										-1
									],
									"scale":[
										1,
										1,
										1
									]
								},
								"components":[],
								"child":[]
							}
						]
					}
				]
			}
		]
	}
}