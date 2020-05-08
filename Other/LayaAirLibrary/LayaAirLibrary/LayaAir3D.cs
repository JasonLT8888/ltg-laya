using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Diagnostics;
using System.Net;
using System.Net.Sockets;
using System.Text.RegularExpressions;
using System.Xml;

using UnityEditor;
using UnityEngine;
using Util;

// Token: 0x02000011 RID: 17
public class LayaAir3D : EditorWindow
{
	// Token: 0x02000012 RID: 18
	public enum ConfigEnum
	{
		// Token: 0x040000AE RID: 174
		config1,
		// Token: 0x040000AF RID: 175
		config2,
		// Token: 0x040000B0 RID: 176
		config3,
		// Token: 0x040000B1 RID: 177
		config4,
		// Token: 0x040000B2 RID: 178
		config5
	}

	// Token: 0x02000013 RID: 19
	enum Enum0
	{
		// Token: 0x040000B4 RID: 180
		const_0,
		// Token: 0x040000B5 RID: 181
		const_1
	}

	// Token: 0x02000014 RID: 20
	public enum TerrainToMeshResolution
	{
		// Token: 0x040000B7 RID: 183
		VeryHeight = 2,
		// Token: 0x040000B8 RID: 184
		Height = 4,
		// Token: 0x040000B9 RID: 185
		Medium = 8,
		// Token: 0x040000BA RID: 186
		Low = 16,
		// Token: 0x040000BB RID: 187
		VeryLow = 32
	}

	// Token: 0x02000015 RID: 21
	public enum TerrainToMeshResolutionHanHua
	{
		// Token: 0x040000BD RID: 189
		非常高 = 2,
		// Token: 0x040000BE RID: 190
		高 = 4,
		// Token: 0x040000BF RID: 191
		中等 = 8,
		// Token: 0x040000C0 RID: 192
		低 = 16,
		// Token: 0x040000C1 RID: 193
		非常低 = 32
	}

	// Token: 0x0600006B RID: 107 RVA: 0x00004CC4 File Offset: 0x00002EC4
	[MenuItem("LayaAir3D/Export Tool", false, 1)]
	public static void initLayaExport()
	{
		LayaAir3D.layaWindow = (LayaAir3D)EditorWindow.GetWindow(typeof(LayaAir3D));
		Texture2D texture2D = new Texture2D(16, 16);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", texture2D);
		GUIContent titleContent = new GUIContent(" LayaAir3D", texture2D);
		LayaAir3D.layaWindow.titleContent = titleContent;
		LayaAir3D.layaWindow.Show(true);
		LayaAir3D.readConfiguration(true);
		LayaAir3D.texture2D_0 = new Texture2D(52, 52);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/erweitu.png", LayaAir3D.texture2D_0);
		LayaAir3D.texture2D_1 = new Texture2D(52, 52);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/Play.png", LayaAir3D.texture2D_1);
		LayaAir3D.texture2D_2 = new Texture2D(52, 52);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/Export.png", LayaAir3D.texture2D_2);
		LayaAir3D.guistyle_0.normal.textColor = Color.red;
	}

	// Token: 0x0600006C RID: 108 RVA: 0x00002548 File Offset: 0x00000748
	[MenuItem("LayaAir3D/Shortcuts/Switch to LayaAir3D Shader", false)]
	static void smethod_0()
	{
		Class32.smethod_72();
	}

	// Token: 0x0600006D RID: 109 RVA: 0x0000254F File Offset: 0x0000074F
	[MenuItem("LayaAir3D/Help/Demo", false)]
	static void smethod_1()
	{
		Application.OpenURL("https://layaair.ldc.layabox.com/demo2");
	}

	// Token: 0x0600006E RID: 110 RVA: 0x0000255B File Offset: 0x0000075B
	[MenuItem("LayaAir3D/Help/Study")]
	static void smethod_2()
	{
		Application.OpenURL("https://ldc.layabox.com/doc");
	}

	// Token: 0x0600006F RID: 111 RVA: 0x00002567 File Offset: 0x00000767
	[MenuItem("LayaAir3D/Help/Answsers")]
	static void smethod_3()
	{
		Application.OpenURL("https://ask.layabox.com");
	}

	// Token: 0x06000070 RID: 112 RVA: 0x00002573 File Offset: 0x00000773
	void OnEnable()
	{
		LayaAir3D.str_ip = this.method_1();
	}

	// Token: 0x06000071 RID: 113 RVA: 0x00004D94 File Offset: 0x00002F94
	void OnGUI()
	{
		if (LayaAir3D.str_Scene == null)
		{
			LayaAir3D.ReadLanguage(1);
		}
		if (LayaAir3D.texture2D_0 == null)
		{
			LayaAir3D.initLayaExport();
		}
		EditorGUI.BeginDisabledGroup(PaymentPage.bool_2);
		EditorGUI.BeginDisabledGroup(Class0.int_0 != 0);
		GUILayout.Space(23f);
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(30f);
		if (GUILayout.Button(new GUIContent(LayaAir3D.str_LayaAirRun, LayaAir3D.texture2D_1), new GUILayoutOption[]
		{
			GUILayout.Height(26f),
			GUILayout.Width(80f)
		}))
		{
			UnityEngine.Debug.Log(Class32.string_0 + "开始导出场景");
			Class32.int_0 = 0;
			LayaAir3D.exportResource(true, 0, "/Conventional");
			LayaAir3D.runLayaDemo(false);
			if (Class0.int_0 == 0)
			{
				UnityEngine.Debug.Log(Class32.string_0 + "Exporting Success");
			}
		}
		GUILayout.Label("", new GUILayoutOption[]
		{
			GUILayout.Height(26f),
			GUILayout.Width(14f)
		});
		if (GUILayout.Button(new GUIContent(LayaAir3D.str_erweimaIcon, LayaAir3D.texture2D_0), new GUILayoutOption[]
		{
			GUILayout.Height(26f),
			GUILayout.Width(80f)
		}))
		{
			Class16.smethod_0();
		}
		GUILayout.Label("", new GUILayoutOption[]
		{
			GUILayout.Height(26f),
			GUILayout.Width(14f)
		});
		if (GUILayout.Button(new GUIContent(LayaAir3D.str_LayaAirExport, LayaAir3D.texture2D_2), new GUILayoutOption[]
		{
			GUILayout.Height(26f),
			GUILayout.Width(80f)
		}))
		{
			LayaAir3D.ExportResources();
		}
		GUILayout.EndHorizontal();
		GUILayout.Space(21f);
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayout.Box("", new GUILayoutOption[]
		{
			GUILayout.Height(3f),
			GUILayout.Width(base.position.width - 50f)
		});
		GUI.Box(new Rect(24f, 74f, base.position.width - 50f, 2f), "");
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal(new GUILayoutOption[]
		{
			GUILayout.Height(30f)
		});
		GUILayout.Space(base.position.width - 105f);
		LayaAir3D.configEnum_0 = (LayaAir3D.ConfigEnum)EditorGUI.EnumPopup(new Rect(base.position.width - 193f, 95f, 70f, 20f), LayaAir3D.configEnum_0);
		if (GUI.Button(new Rect(base.position.width - 119f, 95f, 95f, 15f), LayaAir3D.str_ClearConfig))
		{
			LayaAir3D.smethod_4();
		}
		GUILayout.EndHorizontal();
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(24f);
		LayaAir3D.int_2 = GUILayout.Toolbar(LayaAir3D.int_2, new string[]
		{
			LayaAir3D.str_Scene,
			LayaAir3D.str_Sprite3D
		}, new GUILayoutOption[]
		{
			GUILayout.Height(30f),
			GUILayout.Width(base.position.width - 48f)
		});
		GUILayout.EndHorizontal();
		LayaAir3D.vector2_0 = GUILayout.BeginScrollView(LayaAir3D.vector2_0, new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(21f);
		LayaAir3D.bool_11 = EditorGUILayout.Foldout(LayaAir3D.bool_11, LayaAir3D.str_GameObjectSetting, true);
		GUILayout.EndHorizontal();
		if (LayaAir3D.bool_11)
		{
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", new GUILayoutOption[]
			{
				GUILayout.Width(15f)
			});
			GUILayout.BeginVertical(new GUILayoutOption[]
			{
				GUILayout.ExpandWidth(true)
			});
			LayaAir3D.bool_12 = GUILayout.Toggle(LayaAir3D.bool_12, LayaAir3D.str_IgnoreNotActiveGameObjects, new GUILayoutOption[0]);
			if (LayaAir3D.int_2 == 1)
			{
				LayaAir3D.bool_13 = GUILayout.Toggle(LayaAir3D.bool_13, LayaAir3D.str_BatchMakeTheFirstLevelGameObjects, new GUILayoutOption[0]);
			}
			GUILayout.EndVertical();
			GUILayout.EndHorizontal();
		}
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayout.Box("", new GUILayoutOption[]
		{
			GUILayout.Height(1f),
			GUILayout.Width(base.position.width - 50f)
		});
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(21f);
		LayaAir3D.bool_2 = EditorGUILayout.Foldout(LayaAir3D.bool_2, LayaAir3D.str_MeshSetting, true);
		GUILayout.EndHorizontal();
		if (LayaAir3D.bool_2)
		{
			GUILayout.BeginVertical(new GUILayoutOption[]
			{
				GUILayout.ExpandWidth(true)
			});
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[]
			{
				GUILayout.Width(15f)
			});
			LayaAir3D.bool_3 = GUILayout.Toggle(LayaAir3D.bool_3, LayaAir3D.str_IgnoreVerticesUV, new GUILayoutOption[0]);
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[]
			{
				GUILayout.Width(15f)
			});
			LayaAir3D.bool_6 = GUILayout.Toggle(LayaAir3D.bool_6, LayaAir3D.str_IgnoreVerticesColor, new GUILayoutOption[0]);
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[]
			{
				GUILayout.Width(15f)
			});
			LayaAir3D.bool_4 = GUILayout.Toggle(LayaAir3D.bool_4, LayaAir3D.str_IgnoreVerticesNormal, new GUILayoutOption[0]);
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[]
			{
				GUILayout.Width(15f)
			});
			LayaAir3D.bool_5 = GUILayout.Toggle(LayaAir3D.bool_5, LayaAir3D.str_IgnoreVerticesTangent, new GUILayoutOption[0]);
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[]
			{
				GUILayout.Width(15f)
			});
			LayaAir3D.bool_7 = GUILayout.Toggle(LayaAir3D.bool_7, LayaAir3D.str_Compress, new GUILayoutOption[0]);
			GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[]
			{
				GUILayout.Width(base.position.width - 240f)
			});
			if (this.bool_20)
			{
				if (!Class0.bool_1)
				{
					LayaAir3D.guistyle_0.normal.textColor = Color.red;
					GUILayout.Label(LayaAir3D.str_ThisfunctionneedVIP, LayaAir3D.guistyle_0, new GUILayoutOption[0]);
				}
				else if (!Class0.bool_3)
				{
					LayaAir3D.guistyle_0.normal.textColor = Color.red;
					GUILayout.Label(LayaAir3D.str_PleaseBindthecurrentdevice, LayaAir3D.guistyle_0, new GUILayoutOption[0]);
				}
			}
			else
			{
				GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[0]);
			}
			if (LayaAir3D.bool_7)
			{
				if (Class0.int_2 == 2)
				{
					if (!Class0.bool_1)
					{
						this.bool_20 = true;
						this.int_3 = 0;
						PaymentPage.smethod_0();
					}
					if (!Class0.bool_3)
					{
						this.bool_20 = true;
						this.int_3 = 0;
					}
				}
				else
				{
					LoginWindow.bool_0 = true;
					this.bool_20 = true;
					this.int_3 = 0;
					LoginWindow.initExport();
				}
			}
			if (!Class0.bool_1)
			{
				LayaAir3D.bool_7 = false;
			}
			if (!Class0.bool_3)
			{
				LayaAir3D.bool_7 = false;
			}
			GUILayout.EndHorizontal();
			GUILayout.EndVertical();
		}
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayout.Box("", new GUILayoutOption[]
		{
			GUILayout.Height(1f),
			GUILayout.Width(base.position.width - 50f)
		});
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(21f);
		LayaAir3D.bool_9 = EditorGUILayout.Foldout(LayaAir3D.bool_9, LayaAir3D.str_TerrainSetting, true);
		GUILayout.EndHorizontal();
		if (LayaAir3D.bool_9)
		{
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", new GUILayoutOption[]
			{
				GUILayout.Width(15f)
			});
			LayaAir3D.bool_10 = GUILayout.Toggle(LayaAir3D.bool_10, LayaAir3D.str_ConvertTerrainToMesh, new GUILayoutOption[0]);
			GUILayout.EndHorizontal();
			if (LayaAir3D.bool_10)
			{
				GUILayout.BeginHorizontal(new GUILayoutOption[0]);
				GUILayout.Label("", new GUILayoutOption[]
				{
					GUILayout.Width(30f)
				});
				if (LayaAir3D.language == 0)
				{
					LayaAir3D.terrainToMeshResolution_0 = (LayaAir3D.TerrainToMeshResolution)EditorGUILayout.EnumPopup(LayaAir3D.str_Resolution, LayaAir3D.terrainToMeshResolution_0, new GUILayoutOption[]
					{
						GUILayout.Width(base.position.width - 63f)
					});
				}
				else if (LayaAir3D.language == 1)
				{
					LayaAir3D.terrainToMeshResolutionHanHua_0 = (LayaAir3D.TerrainToMeshResolutionHanHua)EditorGUILayout.EnumPopup(LayaAir3D.str_Resolution, LayaAir3D.terrainToMeshResolutionHanHua_0, new GUILayoutOption[]
					{
						GUILayout.Width(base.position.width - 63f)
					});
				}
				GUILayout.EndHorizontal();
			}
		}
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayout.Box("", new GUILayoutOption[]
		{
			GUILayout.Height(1f),
			GUILayout.Width(base.position.width - 50f)
		});
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(21f);
		LayaAir3D.bool_15 = EditorGUILayout.Foldout(LayaAir3D.bool_15, LayaAir3D.str_AnimationSetting, true);
		GUILayout.EndHorizontal();
		if (LayaAir3D.bool_15)
		{
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", new GUILayoutOption[]
			{
				GUILayout.Width(15f)
			});
			GUILayout.BeginVertical(new GUILayoutOption[]
			{
				GUILayout.ExpandWidth(true)
			});
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			LayaAir3D.bool_16 = GUILayout.Toggle(LayaAir3D.bool_16, LayaAir3D.str_Compress, new GUILayoutOption[0]);
			GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[]
			{
				GUILayout.Width(base.position.width - 240f)
			});
			if (this.bool_23)
			{
				if (!Class0.bool_1)
				{
					LayaAir3D.guistyle_0.normal.textColor = Color.red;
					GUILayout.Label(LayaAir3D.str_ThisfunctionneedVIP, LayaAir3D.guistyle_0, new GUILayoutOption[0]);
				}
				else if (!Class0.bool_3)
				{
					LayaAir3D.guistyle_0.normal.textColor = Color.red;
					GUILayout.Label(LayaAir3D.str_PleaseBindthecurrentdevice, LayaAir3D.guistyle_0, new GUILayoutOption[0]);
				}
			}
			else
			{
				GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[0]);
			}
			if (LayaAir3D.bool_16)
			{
				if (Class0.int_2 == 2)
				{
					if (!Class0.bool_1)
					{
						this.bool_23 = true;
						this.int_6 = 0;
						PaymentPage.smethod_0();
					}
					if (!Class0.bool_3)
					{
						this.bool_23 = true;
						this.int_6 = 0;
					}
				}
				else
				{
					LoginWindow.bool_0 = true;
					this.bool_23 = true;
					this.int_6 = 0;
					LoginWindow.initExport();
				}
			}
			if (!Class0.bool_1)
			{
				LayaAir3D.bool_16 = false;
			}
			if (!Class0.bool_3)
			{
				LayaAir3D.bool_16 = false;
			}
			GUILayout.EndHorizontal();
			GUILayout.EndVertical();
			GUILayout.EndHorizontal();
		}
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayout.Box("", new GUILayoutOption[]
		{
			GUILayout.Height(1f),
			GUILayout.Width(base.position.width - 50f)
		});
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(21f);
		LayaAir3D.bool_18 = EditorGUILayout.Foldout(LayaAir3D.bool_18, LayaAir3D.str_Assetsplatform, true);
		GUILayout.EndHorizontal();
		if (LayaAir3D.bool_18)
		{
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			GUILayout.Space(17f);
			GUILayout.Label("", new GUILayoutOption[]
			{
				GUILayout.Width(15f)
			});
			GUILayout.BeginVertical(new GUILayoutOption[]
			{
				GUILayout.ExpandWidth(true)
			});
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			LayaAir3D.Conventional = GUILayout.Toggle(LayaAir3D.Conventional, " Conventional", new GUILayoutOption[0]);
			GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[0]);
			GUILayout.EndHorizontal();
			if (LayaAir3D.Conventional)
			{
				GUILayout.BeginHorizontal(new GUILayoutOption[0]);
				GUILayout.Space(21f);
				GUILayout.Label("", new GUILayoutOption[]
				{
					GUILayout.Width(15f)
				});
				GUILayout.Label(LayaAir3D.str_JPGQuality, new GUILayoutOption[]
				{
					GUILayout.Width(70f)
				});
				Class32.int_1 = EditorGUILayout.IntSlider(Class32.int_1, 1, 100, new GUILayoutOption[]
				{
					GUILayout.Width(base.position.width - 175f)
				});
				GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[0]);
				GUILayout.EndHorizontal();
			}
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			LayaAir3D.Android = GUILayout.Toggle(LayaAir3D.Android, " Android", new GUILayoutOption[]
			{
				GUILayout.Height(15f)
			});
			GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[]
			{
				GUILayout.Width(base.position.width - 270f)
			});
			if (this.bool_21)
			{
				if (!Class0.bool_1)
				{
					LayaAir3D.guistyle_0.normal.textColor = Color.red;
					LayaAir3D.guistyle_0.alignment = TextAnchor.LowerLeft;
					GUILayout.Label(LayaAir3D.str_ThisfunctionneedVIP, LayaAir3D.guistyle_0, new GUILayoutOption[]
					{
						GUILayout.Height(15f)
					});
				}
				else if (!Class0.bool_3)
				{
					LayaAir3D.guistyle_0.normal.textColor = Color.red;
					LayaAir3D.guistyle_0.alignment = TextAnchor.LowerLeft;
					GUILayout.Label(LayaAir3D.str_PleaseBindthecurrentdevice, LayaAir3D.guistyle_0, new GUILayoutOption[]
					{
						GUILayout.Height(15f)
					});
				}
			}
			else
			{
				GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[]
				{
					GUILayout.Height(15f)
				});
			}
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			LayaAir3D.Ios = GUILayout.Toggle(LayaAir3D.Ios, " iOS", new GUILayoutOption[0]);
			GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[]
			{
				GUILayout.Width(base.position.width - 242f)
			});
			if (this.bool_22)
			{
				if (!Class0.bool_1)
				{
					LayaAir3D.guistyle_0.normal.textColor = Color.red;
					LayaAir3D.guistyle_0.alignment = TextAnchor.LowerLeft;
					GUILayout.Label(LayaAir3D.str_ThisfunctionneedVIP, LayaAir3D.guistyle_0, new GUILayoutOption[]
					{
						GUILayout.Height(15f)
					});
				}
				else if (!Class0.bool_3)
				{
					LayaAir3D.guistyle_0.normal.textColor = Color.red;
					LayaAir3D.guistyle_0.alignment = TextAnchor.LowerLeft;
					GUILayout.Label(LayaAir3D.str_PleaseBindthecurrentdevice, LayaAir3D.guistyle_0, new GUILayoutOption[]
					{
						GUILayout.Height(15f)
					});
				}
			}
			else
			{
				GUILayout.Label("", LayaAir3D.guistyle_0, new GUILayoutOption[]
				{
					GUILayout.Height(15f)
				});
			}
			GUILayout.EndHorizontal();
			if (LayaAir3D.Android || LayaAir3D.Ios)
			{
				if (Class0.int_2 == 2)
				{
					if (!Class0.bool_0 || !Class0.bool_3)
					{
						if (LayaAir3D.Android)
						{
							this.bool_21 = true;
							this.int_4 = 0;
						}
						else
						{
							this.bool_22 = true;
							this.int_5 = 0;
						}
						if (!Class0.bool_0)
						{
							PaymentPage.smethod_0();
						}
					}
				}
				else
				{
					LoginWindow.bool_0 = true;
					if (LayaAir3D.Android)
					{
						this.bool_21 = true;
						this.int_4 = 0;
					}
					else
					{
						this.bool_22 = true;
						this.int_5 = 0;
					}
					LoginWindow.initExport();
				}
			}
			if (!Class0.bool_0)
			{
				LayaAir3D.Android = false;
				LayaAir3D.Ios = false;
			}
			if (!Class0.bool_3)
			{
				LayaAir3D.Android = false;
				LayaAir3D.Ios = false;
			}
			GUILayout.EndVertical();
			GUILayout.EndHorizontal();
		}
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayout.Box("", new GUILayoutOption[]
		{
			GUILayout.Height(1f),
			GUILayout.Width(base.position.width - 50f)
		});
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(21f);
		LayaAir3D.bool_14 = EditorGUILayout.Foldout(LayaAir3D.bool_14, LayaAir3D.str_OtherSetting, true);
		GUILayout.EndHorizontal();
		if (LayaAir3D.bool_14)
		{
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", new GUILayoutOption[]
			{
				GUILayout.Width(15f)
			});
			GUILayout.BeginVertical(new GUILayoutOption[]
			{
				GUILayout.ExpandWidth(true)
			});
			GUILayout.BeginHorizontal(new GUILayoutOption[0]);
			LayaAir3D.bool_17 = GUILayout.Toggle(LayaAir3D.bool_17, LayaAir3D.str_CustomizeExportRootDirectoryName, new GUILayoutOption[]
			{
				GUILayout.Width(250f)
			});
			if (LayaAir3D.bool_17)
			{
				LayaAir3D.string_0 = GUILayout.TextField(LayaAir3D.string_0, new GUILayoutOption[0]);
			}
			GUILayout.EndHorizontal();
			GUILayout.EndVertical();
			GUILayout.EndHorizontal();
		}
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayout.Box("", new GUILayoutOption[]
		{
			GUILayout.Height(1f),
			GUILayout.Width(base.position.width - 50f)
		});
		GUILayout.EndHorizontal();
		GUILayout.EndScrollView();
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		if (LayaAir3D.bool_19)
		{
			GUIStyle guistyle = new GUIStyle();
			guistyle.normal.textColor = Color.red;
			GUILayout.Label(LayaAir3D.str_SavePathcannotbeempty, guistyle, new GUILayoutOption[0]);
		}
		GUILayout.EndHorizontal();
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Space(21f);
		GUILayout.Label(LayaAir3D.str_SavePath, new GUILayoutOption[]
		{
			GUILayout.Width(65f)
		});
		LayaAir3D.string_1 = GUILayout.TextField(LayaAir3D.string_1, new GUILayoutOption[]
		{
			GUILayout.Height(21f)
		});
		if (LayaAir3D.string_1 != "")
		{
			LayaAir3D.bool_19 = false;
			base.Repaint();
		}
		if (GUILayout.Button(LayaAir3D.str_Browse, new GUILayoutOption[]
		{
			GUILayout.MaxWidth(100f),
			GUILayout.Height(22f)
		}))
		{
			LayaAir3D.string_1 = EditorUtility.SaveFolderPanel("LayaUnityPlugin", "Assets", "");
		}
		GUILayout.Space(21f);
		GUILayout.EndHorizontal();
		GUILayout.Space(30f);
		EditorGUI.EndDisabledGroup();
		EditorGUI.EndDisabledGroup();
	}

	// Token: 0x06000072 RID: 114 RVA: 0x00002580 File Offset: 0x00000780
	public static void ReadFileExportResources()
	{
		LayaAir3D.ReadExportConfig();
		LayaAir3D.ExportResources();
	}

	// Token: 0x06000073 RID: 115 RVA: 0x000060AC File Offset: 0x000042AC
	public static void ExportResources()
	{
		if (LayaAir3D.string_1 == "")
		{
			LayaAir3D.bool_19 = true;
			UnityEngine.Debug.LogError(LayaAir3D.str_Exportaddresscannotbeempty);
			return;
		}
		if (LayaAir3D.customExport != null)
		{
			LayaAir3D.customExport.StartHierarchysExport(LayaAir3D.string_1);
		}
		Class32.int_0 = LayaAir3D.int_2;
		if (!LayaAir3D.Ios && !LayaAir3D.Android && !LayaAir3D.bool_7 && !LayaAir3D.bool_16)
		{
			UnityEngine.Debug.Log(Class32.string_0 + "Start Exporting");
			if (LayaAir3D.Conventional)
			{
				LayaAir3D.exportResource(false, 0, "/Conventional");
			}
			if (Class0.int_0 == 0)
			{
				UnityEngine.Debug.Log(Class32.string_0 + "Exporting Success");
			}
			if (LayaAir3D.customExport != null)
			{
				LayaAir3D.customExport.EndHierarchysExport(LayaAir3D.string_1);
			}
			return;
		}
		if (Class0.string_4 == "")
		{
			LoginWindow.initExport();
			return;
		}
		LoginWindow.class0_0.method_18();
	}

	// Token: 0x06000074 RID: 116 RVA: 0x00006194 File Offset: 0x00004394
	void method_0()
	{
		if (LayaAir3D.configEnum_0 == LayaAir3D.ConfigEnum.config1)
		{
			LayaAir3D.curConfigIndex = 1;
		}
		else if (LayaAir3D.configEnum_0 == LayaAir3D.ConfigEnum.config2)
		{
			LayaAir3D.curConfigIndex = 2;
		}
		else if (LayaAir3D.configEnum_0 == LayaAir3D.ConfigEnum.config3)
		{
			LayaAir3D.curConfigIndex = 3;
		}
		else if (LayaAir3D.configEnum_0 == LayaAir3D.ConfigEnum.config4)
		{
			LayaAir3D.curConfigIndex = 4;
		}
		else if (LayaAir3D.configEnum_0 == LayaAir3D.ConfigEnum.config5)
		{
			LayaAir3D.curConfigIndex = 5;
		}
		if (LayaAir3D.int_1 != LayaAir3D.curConfigIndex)
		{
			LayaAir3D.readConfiguration(false);
			LayaAir3D.int_1 = LayaAir3D.curConfigIndex;
		}
	}

	// Token: 0x06000075 RID: 117 RVA: 0x0000620C File Offset: 0x0000440C
	public static void exportResource(bool isDebug, int Platformindex, string lastname)
	{
		if ((LayaAir3D.string_1 != null && LayaAir3D.string_1.Length != 0) || isDebug)
		{
			LayaAir3D.smethod_5();
			Class32.bool_0 = LayaAir3D.bool_3;
			Class32.bool_2 = LayaAir3D.bool_4;
			Class32.bool_3 = LayaAir3D.bool_5;
			Class32.bool_1 = LayaAir3D.bool_6;
			Class32.bool_4 = LayaAir3D.bool_7;
			Class32.bool_5 = LayaAir3D.bool_16;
			Class32.bool_6 = LayaAir3D.bool_10;
			if (LayaAir3D.language == 0)
			{
				Class32.int_2 = (int)LayaAir3D.terrainToMeshResolution_0;
			}
			else if (LayaAir3D.language == 1)
			{
				Class32.int_2 = (int)LayaAir3D.terrainToMeshResolutionHanHua_0;
			}
			Class32.bool_7 = LayaAir3D.bool_12;
			Class32.bool_8 = LayaAir3D.bool_13;
			Class32.bool_9 = LayaAir3D.bool_17;
			Class32.string_1 = LayaAir3D.string_0;
			Class32.float_0 = LayaAir3D.float_0;
			Class32.bool_11 = LayaAir3D.Android;
			Class32.bool_10 = LayaAir3D.Ios;
			Class32.bool_12 = LayaAir3D.Conventional;
			if (isDebug)
			{
				Class32.string_2 = Application.dataPath + "/StreamingAssets/LayaDemo/.previewres";
				Class32.bool_8 = false;
			}
			else
			{
				Class32.string_2 = LayaAir3D.string_1;
			}
			Class32.int_3 = Platformindex;
			Class32.smethod_1(lastname);
			Class32.dictionary_1.Clear();
			return;
		}
		UnityEngine.Debug.LogWarning("LayaUnityPlugin : Please check exporting path !");
	}

	// Token: 0x06000076 RID: 118 RVA: 0x00006344 File Offset: 0x00004544
	static void smethod_4()
	{
		LayaAir3D.int_2 = 0;
		LayaAir3D.bool_2 = false;
		LayaAir3D.bool_3 = false;
		LayaAir3D.bool_4 = false;
		LayaAir3D.bool_5 = false;
		LayaAir3D.bool_6 = false;
		LayaAir3D.bool_7 = false;
		LayaAir3D.bool_8 = false;
		Class32.int_1 = 75;
		LayaAir3D.bool_9 = false;
		LayaAir3D.bool_10 = false;
		if (LayaAir3D.language == 0)
		{
			LayaAir3D.terrainToMeshResolution_0 = LayaAir3D.TerrainToMeshResolution.Medium;
		}
		else if (LayaAir3D.language == 1)
		{
			LayaAir3D.terrainToMeshResolutionHanHua_0 = LayaAir3D.TerrainToMeshResolutionHanHua.中等;
		}
		LayaAir3D.bool_11 = false;
		LayaAir3D.bool_12 = false;
		LayaAir3D.bool_13 = false;
		LayaAir3D.bool_14 = false;
		LayaAir3D.bool_16 = false;
		LayaAir3D.bool_15 = false;
		LayaAir3D.bool_17 = false;
		LayaAir3D.string_0 = "";
		LayaAir3D.string_1 = "";
		LayaAir3D.vector2_0.y = 0f;
		LayaAir3D.Ios = false;
		LayaAir3D.Android = false;
		LayaAir3D.Conventional = true;
	}

	// Token: 0x06000077 RID: 119 RVA: 0x0000258C File Offset: 0x0000078C
	public static void ReadExportConfig()
	{
		LayaAir3D.readConfiguration(true);
	}

	// Token: 0x06000078 RID: 120 RVA: 0x00006410 File Offset: 0x00004610
	public static void readConfiguration(bool readConfig)
	{
		XmlDocument xmlDocument = new XmlDocument();
		xmlDocument.Load("Assets/LayaAir3D/LayaTool/Configuration.xml");
		XmlNodeList childNodes = xmlDocument.SelectSingleNode("LayaExportSetting").ChildNodes;
		if (readConfig)
		{
			switch (int.Parse(childNodes[0].InnerText))
			{
			case 1:
				LayaAir3D.configEnum_0 = LayaAir3D.ConfigEnum.config1;
				break;
			case 2:
				LayaAir3D.configEnum_0 = LayaAir3D.ConfigEnum.config2;
				break;
			case 3:
				LayaAir3D.configEnum_0 = LayaAir3D.ConfigEnum.config3;
				break;
			case 4:
				LayaAir3D.configEnum_0 = LayaAir3D.ConfigEnum.config4;
				break;
			case 5:
				LayaAir3D.configEnum_0 = LayaAir3D.ConfigEnum.config5;
				break;
			}
			LayaAir3D.int_1 = (LayaAir3D.curConfigIndex = int.Parse(childNodes[0].InnerText));
		}
		LayaAir3D.int_2 = int.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("FirstlevelMenu").InnerText);
		LayaAir3D.bool_2 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("MeshSetting").InnerText);
		LayaAir3D.bool_3 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("IgnoreVerticesUV").InnerText);
		LayaAir3D.bool_4 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("IgnoreVerticesNormal").InnerText);
		LayaAir3D.bool_5 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("IgnoreVerticesTangent").InnerText);
		LayaAir3D.bool_6 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("IgnoreVerticesColor").InnerText);
		LayaAir3D.bool_7 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("CompressMesh").InnerText);
		LayaAir3D.bool_16 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("AnimatorCompress").InnerText);
		LayaAir3D.bool_8 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("TextureSetting").InnerText);
		Class32.int_1 = int.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("JPGQuality").InnerText);
		LayaAir3D.bool_9 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("TerrainSetting").InnerText);
		LayaAir3D.bool_10 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("ConvertTerrain").InnerText);
		int num = int.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("TerrainToMeshResolution").InnerText);
		if (num <= 4)
		{
			if (num == 2)
			{
				LayaAir3D.terrainToMeshResolution_0 = LayaAir3D.TerrainToMeshResolution.VeryHeight;
				LayaAir3D.terrainToMeshResolutionHanHua_0 = LayaAir3D.TerrainToMeshResolutionHanHua.非常高;
				goto IL_2D9;
			}
			if (num == 4)
			{
				LayaAir3D.terrainToMeshResolution_0 = LayaAir3D.TerrainToMeshResolution.Height;
				LayaAir3D.terrainToMeshResolutionHanHua_0 = LayaAir3D.TerrainToMeshResolutionHanHua.高;
				goto IL_2D9;
			}
		}
		else
		{
			if (num == 8)
			{
				LayaAir3D.terrainToMeshResolution_0 = LayaAir3D.TerrainToMeshResolution.Medium;
				LayaAir3D.terrainToMeshResolutionHanHua_0 = LayaAir3D.TerrainToMeshResolutionHanHua.中等;
				goto IL_2D9;
			}
			if (num == 16)
			{
				LayaAir3D.terrainToMeshResolution_0 = LayaAir3D.TerrainToMeshResolution.Low;
				LayaAir3D.terrainToMeshResolutionHanHua_0 = LayaAir3D.TerrainToMeshResolutionHanHua.低;
				goto IL_2D9;
			}
			if (num == 32)
			{
				LayaAir3D.terrainToMeshResolution_0 = LayaAir3D.TerrainToMeshResolution.VeryLow;
				LayaAir3D.terrainToMeshResolutionHanHua_0 = LayaAir3D.TerrainToMeshResolutionHanHua.非常低;
				goto IL_2D9;
			}
		}
		LayaAir3D.terrainToMeshResolution_0 = LayaAir3D.TerrainToMeshResolution.Medium;
		LayaAir3D.terrainToMeshResolutionHanHua_0 = LayaAir3D.TerrainToMeshResolutionHanHua.中等;
		IL_2D9:
		LayaAir3D.bool_11 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("GameObjectSetting").InnerText);
		LayaAir3D.bool_12 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("IgnoreNotActiveGameObject").InnerText);
		LayaAir3D.bool_13 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("BatchMade").InnerText);
		LayaAir3D.bool_14 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("OtherSetting").InnerText);
		LayaAir3D.bool_17 = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("CustomizeDirectory").InnerText);
		LayaAir3D.string_0 = childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("CustomizeDirectoryName").InnerText;
		LayaAir3D.Ios = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("Ios").InnerText);
		LayaAir3D.Android = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("Android").InnerText);
		LayaAir3D.Conventional = bool.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("Conventional").InnerText);
		LayaAir3D.string_1 = childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("SavePath").InnerText;
		LayaAir3D.vector2_0.y = float.Parse(childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("ScrollPositionY").InnerText);
		LayaAir3D.language = int.Parse(childNodes[6].InnerText);
		LayaAir3D.adTime = long.Parse(childNodes[7].InnerText);
		if (LayaAir3D.adTime == 0L)
		{
			LayaAir3D.adTime = Class0.smethod_1(true);
			childNodes[7].InnerText = LayaAir3D.adTime.ToString();
			LoginWindow.class0_0.method_22();
		}
		else if (Class0.smethod_1(true) - LayaAir3D.adTime > 86400L)
		{
			LayaAir3D.adTime = Class0.smethod_1(true);
			LoginWindow.class0_0.method_22();
			childNodes[7].InnerText = LayaAir3D.adTime.ToString();
		}
		LayaAir3D.ReadLanguage(LayaAir3D.language);
		if (LayaAir3D.layaWindow != null)
		{
			LayaAir3D.layaWindow.Repaint();
		}
		xmlDocument.Save("Assets/LayaAir3D/LayaTool/Configuration.xml");
	}

	// Token: 0x06000079 RID: 121 RVA: 0x0000694C File Offset: 0x00004B4C
	void OnInspectorUpdate()
	{
		if (this.bool_20)
		{
			this.int_3++;
			if (this.int_3 == 5)
			{
				this.bool_20 = false;
			}
		}
		if (this.bool_21)
		{
			this.int_4++;
			if (this.int_4 == 5)
			{
				this.bool_21 = false;
			}
		}
		if (this.bool_22)
		{
			this.int_5++;
			if (this.int_5 == 5)
			{
				this.bool_22 = false;
			}
		}
		if (this.bool_23)
		{
			this.int_6++;
			if (this.int_6 == 5)
			{
				this.bool_23 = false;
			}
		}
	}

	// Token: 0x0600007A RID: 122 RVA: 0x000069F4 File Offset: 0x00004BF4
	static void smethod_5()
	{
		XmlDocument xmlDocument = new XmlDocument();
		xmlDocument.Load("Assets/LayaAir3D/LayaTool/Configuration.xml");
		XmlNodeList childNodes = xmlDocument.SelectSingleNode("LayaExportSetting").ChildNodes;
		childNodes[0].InnerText = LayaAir3D.curConfigIndex.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("FirstlevelMenu").InnerText = LayaAir3D.int_2.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("MeshSetting").InnerText = LayaAir3D.bool_2.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("IgnoreVerticesUV").InnerText = LayaAir3D.bool_3.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("IgnoreVerticesNormal").InnerText = LayaAir3D.bool_4.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("IgnoreVerticesTangent").InnerText = LayaAir3D.bool_5.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("IgnoreVerticesColor").InnerText = LayaAir3D.bool_6.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("CompressMesh").InnerText = LayaAir3D.bool_7.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("AnimatorCompress").InnerText = LayaAir3D.bool_16.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("TextureSetting").InnerText = LayaAir3D.bool_8.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("JPGQuality").InnerText = Class32.int_1.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("TerrainSetting").InnerText = LayaAir3D.bool_9.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("ConvertTerrain").InnerText = LayaAir3D.bool_10.ToString();
		if (LayaAir3D.language == 0)
		{
			XmlNode xmlNode = childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("TerrainToMeshResolution");
			int num = (int)LayaAir3D.terrainToMeshResolution_0;
			xmlNode.InnerText = num.ToString();
		}
		else if (LayaAir3D.language == 1)
		{
			XmlNode xmlNode2 = childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("TerrainToMeshResolution");
			int num = (int)LayaAir3D.terrainToMeshResolutionHanHua_0;
			xmlNode2.InnerText = num.ToString();
		}
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("GameObjectSetting").InnerText = LayaAir3D.bool_11.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("IgnoreNotActiveGameObject").InnerText = LayaAir3D.bool_12.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("BatchMade").InnerText = LayaAir3D.bool_13.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("OtherSetting").InnerText = LayaAir3D.bool_14.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("CustomizeDirectory").InnerText = LayaAir3D.bool_17.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("CustomizeDirectoryName").InnerText = LayaAir3D.string_0;
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("Ios").InnerText = LayaAir3D.Ios.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("Android").InnerText = LayaAir3D.Android.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("Conventional").InnerText = LayaAir3D.Conventional.ToString();
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("SavePath").InnerText = LayaAir3D.string_1;
		childNodes[LayaAir3D.curConfigIndex].SelectSingleNode("ScrollPositionY").InnerText = LayaAir3D.vector2_0.y.ToString();
		childNodes[6].InnerText = LayaAir3D.language.ToString();
		xmlDocument.Save("Assets/LayaAir3D/LayaTool/Configuration.xml");
	}

	// Token: 0x0600007B RID: 123 RVA: 0x00002594 File Offset: 0x00000794
	static void smethod_6()
	{
		XmlDocument xmlDocument = new XmlDocument();
		xmlDocument.Load("Assets/LayaAir3D/LayaTool/English.xml");
		UnityEngine.Debug.Log(xmlDocument.SelectSingleNode("EnglishLanguage").SelectSingleNode("IgnoreNotActiveGameObject").InnerText);
	}

	// Token: 0x0600007C RID: 124 RVA: 0x00006DF0 File Offset: 0x00004FF0
	public static void ReadLanguage(int index)
	{
		LayaAir3D.language = index;
		XmlDocument xmlDocument = new XmlDocument();
		XmlNode xmlNode;
		if (index == 0)
		{
			xmlDocument.Load("Assets/LayaAir3D/LayaTool/English.xml");
			xmlNode = xmlDocument.SelectSingleNode("EnglishLanguage");
		}
		else
		{
			xmlDocument.Load("Assets/LayaAir3D/LayaTool/Chinese.xml");
			xmlNode = xmlDocument.SelectSingleNode("ChineseLanguage");
		}
		LayaAir3D.str_Scene = xmlNode.SelectSingleNode("Scene").InnerText;
		LayaAir3D.str_Sprite3D = xmlNode.SelectSingleNode("Sprite3D").InnerText;
		LayaAir3D.str_MeshSetting = xmlNode.SelectSingleNode("MeshSetting").InnerText;
		LayaAir3D.str_IgnoreVerticesUV = xmlNode.SelectSingleNode("IgnoreVerticesUV").InnerText;
		LayaAir3D.str_IgnoreVerticesColor = xmlNode.SelectSingleNode("IgnoreVerticesColor").InnerText;
		LayaAir3D.str_IgnoreVerticesNormal = xmlNode.SelectSingleNode("IgnoreVerticesNormal").InnerText;
		LayaAir3D.str_IgnoreVerticesTangent = xmlNode.SelectSingleNode("IgnoreVerticesTangent").InnerText;
		LayaAir3D.str_Compress = xmlNode.SelectSingleNode("Compress").InnerText;
		LayaAir3D.str_ThisfunctionneedVIP = xmlNode.SelectSingleNode("ThisfunctionneedVIP").InnerText;
		LayaAir3D.str_PleaseBindthecurrentdevice = xmlNode.SelectSingleNode("PleaseBindthecurrentdevice").InnerText;
		LayaAir3D.str_TerrainSetting = xmlNode.SelectSingleNode("TerrainSetting").InnerText;
		LayaAir3D.str_ConvertTerrainToMesh = xmlNode.SelectSingleNode("ConvertTerrainToMesh").InnerText;
		LayaAir3D.str_Resolution = xmlNode.SelectSingleNode("Resolution").InnerText;
		LayaAir3D.str_GameObjectSetting = xmlNode.SelectSingleNode("GameObjectSetting").InnerText;
		LayaAir3D.str_IgnoreNotActiveGameObjects = xmlNode.SelectSingleNode("IgnoreNotActiveGameObjects").InnerText;
		LayaAir3D.str_BatchMakeTheFirstLevelGameObjects = xmlNode.SelectSingleNode("BatchMakeTheFirstLevelGameObjects").InnerText;
		LayaAir3D.str_Assetsplatform = xmlNode.SelectSingleNode("Assetsplatform").InnerText;
		LayaAir3D.str_AnimationSetting = xmlNode.SelectSingleNode("AnimationSetting").InnerText;
		LayaAir3D.str_OtherSetting = xmlNode.SelectSingleNode("OtherSetting").InnerText;
		LayaAir3D.str_CustomizeExportRootDirectoryName = xmlNode.SelectSingleNode("CustomizeExportRootDirectoryName").InnerText;
		LayaAir3D.str_SavePathcannotbeempty = xmlNode.SelectSingleNode("SavePathcannotbeempty").InnerText;
		LayaAir3D.str_SavePath = xmlNode.SelectSingleNode("SavePath").InnerText;
		LayaAir3D.str_Browse = xmlNode.SelectSingleNode("Browse").InnerText;
		LayaAir3D.str_ClearConfig = xmlNode.SelectSingleNode("ClearConfig").InnerText;
		LayaAir3D.str_LayaAirRun = xmlNode.SelectSingleNode("LayaAirRun").InnerText;
		LayaAir3D.str_LayaAirExport = xmlNode.SelectSingleNode("LayaAirExport").InnerText;
		LayaAir3D.str_Exportaddresscannotbeempty = xmlNode.SelectSingleNode("Exportaddresscannotbeempty").InnerText;
		LayaAir3D.str_JPGQuality = xmlNode.SelectSingleNode("JPGquality").InnerText;
		LayaAir3D.str_Copy = xmlNode.SelectSingleNode("Copy").InnerText;
		LayaAir3D.str_erweimaIcon = xmlNode.SelectSingleNode("erweimatu").InnerText;
		LoginWindow.string_2 = xmlNode.SelectSingleNode("Accountorpassworderror").InnerText;
		LoginWindow.string_3 = xmlNode.SelectSingleNode("Accountpasswordcannotbeempty").InnerText;
		LoginWindow.string_4 = xmlNode.SelectSingleNode("Pleaserecheckthenetwork").InnerText;
		LoginWindow.string_5 = xmlNode.SelectSingleNode("Logonfailed").InnerText;
		LoginWindow.string_6 = xmlNode.SelectSingleNode("Account").InnerText;
		LoginWindow.string_7 = xmlNode.SelectSingleNode("Password").InnerText;
		LoginWindow.string_8 = xmlNode.SelectSingleNode("Login").InnerText;
		LoginWindow.string_9 = xmlNode.SelectSingleNode("Forgetpassword").InnerText;
		LoginWindow.string_10 = xmlNode.SelectSingleNode("register").InnerText;
		LoginWindow.string_11 = xmlNode.SelectSingleNode("NotOpen").InnerText;
		LoginWindow.string_12 = xmlNode.SelectSingleNode("Recharge").InnerText;
		LoginWindow.string_13 = xmlNode.SelectSingleNode("VIPFunction").InnerText;
		LoginWindow.string_14 = xmlNode.SelectSingleNode("Function1").InnerText;
		LoginWindow.string_15 = xmlNode.SelectSingleNode("Function2").InnerText;
		LoginWindow.string_16 = xmlNode.SelectSingleNode("Function3").InnerText;
		LoginWindow.string_18 = xmlNode.SelectSingleNode("BindingDevice").InnerText;
		LoginWindow.string_19 = xmlNode.SelectSingleNode("Unbind").InnerText;
		LoginWindow.string_20 = xmlNode.SelectSingleNode("SignOut").InnerText;
		LoginWindow.string_21 = xmlNode.SelectSingleNode("Refresh").InnerText;
		LoginWindow.string_22 = xmlNode.SelectSingleNode("Invoice").InnerText;
		LoginWindow.string_17 = xmlNode.SelectSingleNode("LearnMore").InnerText;
		LoginWindow.string_23 = xmlNode.SelectSingleNode("qiyeVIP").InnerText;
		LoginWindow.string_24 = xmlNode.SelectSingleNode("gerenVIP").InnerText;
		LoginWindow.string_25 = xmlNode.SelectSingleNode("putongVIP").InnerText;
		Class23.string_0 = xmlNode.SelectSingleNode("LayaBoxVersion").InnerText;
		Class23.string_1 = xmlNode.SelectSingleNode("AboutLayaAir").InnerText;
		Class24.string_0 = xmlNode.SelectSingleNode("downloadNodejs").InnerText;
		Class24.string_1 = xmlNode.SelectSingleNode("unity").InnerText;
		Class24.string_2 = xmlNode.SelectSingleNode("down").InnerText;
		Class25.string_0 = xmlNode.SelectSingleNode("Unbindlingfail").InnerText;
		Class25.string_1 = xmlNode.SelectSingleNode("accountDevice").InnerText;
		Class25.string_2 = xmlNode.SelectSingleNode("UnbindSuccess").InnerText;
		Class25.string_3 = xmlNode.SelectSingleNode("YourAcountNeedReLogin").InnerText;
		Class0.string_12 = xmlNode.SelectSingleNode("Expired").InnerText;
	}

	// Token: 0x0600007D RID: 125 RVA: 0x0000737C File Offset: 0x0000557C
	static void smethod_7()
	{
		string text = "";
		if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.MacOSX)
		{
			text = "lsof -i tcp:port | awk '{print $2}' | tail -n +2";
		}
		else if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.Windows)
		{
			text = "netstat -ano | findstr :port";
		}
		text = text.Replace("port", LayaAir3D.curNodePort.ToString());
		string text2 = Class35.smethod_2(text);
		int num = 0;
		while (num < 50 && text2 != null && !text2.Contains("TIME_WAIT"))
		{
			text = text.Replace(LayaAir3D.curNodePort.ToString(), (LayaAir3D.curNodePort + 2).ToString());
			text2 = Class35.smethod_2(text);
			LayaAir3D.curNodePort += 2;
			num++;
		}
	}

	// Token: 0x0600007E RID: 126 RVA: 0x0000741C File Offset: 0x0000561C
	static void smethod_8()
	{
		if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.MacOSX)
		{
			string text = Environment.GetEnvironmentVariable("PATH");
			if (!text.Contains("/usr/local/bin"))
			{
				text += ":/usr/local/bin/";
				Environment.SetEnvironmentVariable("PATH", text);
			}
		}
		if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.Windows && !LayaAir3D.isHaveCmdPath)
		{
			string str = Environment.ExpandEnvironmentVariables("%SystemRoot%");
			string text2 = str + "/system32";
			string text3 = str + "/System32/Wbem";
			string text4 = Environment.GetEnvironmentVariable("PATH");
			text4 = string.Concat(new string[]
			{
				text4,
				";",
				text2,
				";",
				text3
			});
			Environment.SetEnvironmentVariable("PATH", text4);
			LayaAir3D.isHaveCmdPath = true;
		}
		string text5 = Class35.smethod_2("node -v");
		if (text5 != null && text5.Contains("v"))
		{
			LayaAir3D.bool_0 = true;
		}
	}

	// Token: 0x0600007F RID: 127 RVA: 0x000074FC File Offset: 0x000056FC
	public static void runLayaDemo(bool isSilent = false)
	{
		if (LayaAir3D.bool_1)
		{
			if (!isSilent)
			{
				string text = LayaAir3D.str_ip + ":" + LayaAir3D.curNodePort;
				text = "http://" + text + "/index.html";
				Application.OpenURL(text);
				return;
			}
		}
		else
		{
			if (!LayaAir3D.bool_0)
			{
				LayaAir3D.smethod_8();
				if (!LayaAir3D.bool_0)
				{
					UnityEngine.Debug.Log("Please install and configure Node.js first!");
					Class24.smethod_0();
					return;
				}
			}
			LayaAir3D.smethod_7();
			string text2 = Application.dataPath + "/StreamingAssets/LayaDemo";
			string arg = "node ./node_modules/anywhere/bin/anywhere ";
			arg = arg + "-p " + LayaAir3D.curNodePort;
			LayaAir3D.int_0 = Class35.smethod_0(text2, arg, isSilent);
			LayaAir3D.bool_1 = true;
		}
	}

	// Token: 0x06000080 RID: 128 RVA: 0x000025C4 File Offset: 0x000007C4
	void OnDestroy()
	{
		if (LayaAir3D.bool_0 && LayaAir3D.int_0 != 0)
		{
			Process.GetProcessById(LayaAir3D.int_0).Kill();
			LayaAir3D.bool_1 = false;
			LayaAir3D.int_0 = 0;
			LayaAir3D.destoryNodeProcess();
		}
		LayaAir3D.smethod_5();
	}

	// Token: 0x06000081 RID: 129 RVA: 0x000075B0 File Offset: 0x000057B0
	public static void destoryNodeProcess()
	{
		try
		{
			string text = "";
			if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.MacOSX)
			{
				text = "lsof -i tcp:port | awk '{print $2}' | tail -n +2";
			}
			else if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.Windows)
			{
				text = "netstat -ano | findstr :port";
			}
			text = text.Replace("port", LayaAir3D.curNodePort.ToString());
			string text2 = Class35.smethod_2(text);
			if (text2 != null)
			{
				new List<int>();
				int processId = 0;
				bool flag = false;
				if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.MacOSX)
				{
					text2 = text2.Trim();
					flag = int.TryParse(text2, out processId);
				}
				else if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.Windows)
				{
					text2 = text2.Trim();
					if (text2.Length > 0 && (text2.Contains("TCP") || text2.Contains("UDP")))
					{
						string[] array = new Regex("\\s+").Split(text2);
						if (array.Length >= 4)
						{
							flag = int.TryParse(array[4], out processId);
						}
					}
				}
				if (flag)
				{
					Process.GetProcessById(processId).Kill();
				}
			}
		}
		catch (Exception message)
		{
			UnityEngine.Debug.LogError(message);
		}
	}

	// Token: 0x06000082 RID: 130 RVA: 0x000076A8 File Offset: 0x000058A8
	string method_1()
	{
		string result;
		using (Socket socket = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.IP))
		{
			socket.Connect("8.8.8.8", 65530);
			result = (socket.LocalEndPoint as IPEndPoint).Address.ToString();
		}
		return result;
	}

	// Token: 0x06000083 RID: 131 RVA: 0x00007704 File Offset: 0x00005904
	string method_2()
	{
		IPAddress[] hostAddresses = Dns.GetHostAddresses(Dns.GetHostName());
		StringCollection stringCollection = new StringCollection();
		foreach (IPAddress ipaddress in hostAddresses)
		{
			if (ipaddress.AddressFamily == AddressFamily.InterNetwork)
			{
				stringCollection.Add(ipaddress.ToString());
			}
		}
		string[] array2 = new string[stringCollection.Count];
		stringCollection.CopyTo(array2, 0);
		return array2[0];
	}

	// Token: 0x06000084 RID: 132 RVA: 0x000025F9 File Offset: 0x000007F9
	public LayaAir3D()
	{
		
		
	}

	// Token: 0x06000085 RID: 133 RVA: 0x00007764 File Offset: 0x00005964
	// Note: this type is marked as 'beforefieldinit'.
	static LayaAir3D()
	{
		
		LayaAir3D.int_0 = 0;
		LayaAir3D.bool_0 = false;
		LayaAir3D.bool_1 = false;
		LayaAir3D.curNodePort = 8024;
		LayaAir3D.isHaveCmdPath = false;
		LayaAir3D.curConfigIndex = 1;
		LayaAir3D.string_0 = "";
		LayaAir3D.Android = false;
		LayaAir3D.Ios = false;
		LayaAir3D.Conventional = true;
		LayaAir3D.string_1 = "";
		LayaAir3D.float_0 = 1f;
		LayaAir3D.guistyle_0 = new GUIStyle();
		LayaAir3D.bool_19 = false;
	}

	// Token: 0x04000059 RID: 89
	static int int_0;

	// Token: 0x0400005A RID: 90
	static bool bool_0;

	// Token: 0x0400005B RID: 91
	static bool bool_1;

	// Token: 0x0400005C RID: 92
	public static int curNodePort;

	// Token: 0x0400005D RID: 93
	public static bool isHaveCmdPath;

	// Token: 0x0400005E RID: 94
	static LayaAir3D.ConfigEnum configEnum_0;

	// Token: 0x0400005F RID: 95
	public static int curConfigIndex;

	// Token: 0x04000060 RID: 96
	static int int_1;

	// Token: 0x04000061 RID: 97
	static int int_2;

	// Token: 0x04000062 RID: 98
	static Vector2 vector2_0;

	// Token: 0x04000063 RID: 99
	static bool bool_2;

	// Token: 0x04000064 RID: 100
	static bool bool_3;

	// Token: 0x04000065 RID: 101
	static bool bool_4;

	// Token: 0x04000066 RID: 102
	static bool bool_5;

	// Token: 0x04000067 RID: 103
	static bool bool_6;

	// Token: 0x04000068 RID: 104
	static bool bool_7;

	// Token: 0x04000069 RID: 105
	static bool bool_8;

	// Token: 0x0400006A RID: 106
	static bool bool_9;

	// Token: 0x0400006B RID: 107
	static bool bool_10;

	// Token: 0x0400006C RID: 108
	static LayaAir3D.TerrainToMeshResolution terrainToMeshResolution_0;

	// Token: 0x0400006D RID: 109
	static LayaAir3D.TerrainToMeshResolutionHanHua terrainToMeshResolutionHanHua_0;

	// Token: 0x0400006E RID: 110
	static bool bool_11;

	// Token: 0x0400006F RID: 111
	static bool bool_12;

	// Token: 0x04000070 RID: 112
	static bool bool_13;

	// Token: 0x04000071 RID: 113
	static bool bool_14;

	// Token: 0x04000072 RID: 114
	static bool bool_15;

	// Token: 0x04000073 RID: 115
	static bool bool_16;

	// Token: 0x04000074 RID: 116
	static bool bool_17;

	// Token: 0x04000075 RID: 117
	static string string_0;

	// Token: 0x04000076 RID: 118
	static bool bool_18;

	// Token: 0x04000077 RID: 119
	public static bool Android;

	// Token: 0x04000078 RID: 120
	public static bool Ios;

	// Token: 0x04000079 RID: 121
	public static bool Conventional;

	// Token: 0x0400007A RID: 122
	static string string_1;

	// Token: 0x0400007B RID: 123
	static Texture2D texture2D_0;

	// Token: 0x0400007C RID: 124
	static Texture2D texture2D_1;

	// Token: 0x0400007D RID: 125
	static Texture2D texture2D_2;

	// Token: 0x0400007E RID: 126
	static float float_0;

	// Token: 0x0400007F RID: 127
	static GUIStyle guistyle_0;

	// Token: 0x04000080 RID: 128
	static bool bool_19;

	// Token: 0x04000081 RID: 129
	bool bool_20;

	// Token: 0x04000082 RID: 130
	int int_3;

	// Token: 0x04000083 RID: 131
	bool bool_21;

	// Token: 0x04000084 RID: 132
	int int_4;

	// Token: 0x04000085 RID: 133
	bool bool_22;

	// Token: 0x04000086 RID: 134
	int int_5;

	// Token: 0x04000087 RID: 135
	bool bool_23;

	// Token: 0x04000088 RID: 136
	int int_6;

	// Token: 0x04000089 RID: 137
	public static LayaAir3D layaWindow;

	// Token: 0x0400008A RID: 138
	public static int language;

	// Token: 0x0400008B RID: 139
	public static long adTime;

	// Token: 0x0400008C RID: 140
	public static string str_Scene;

	// Token: 0x0400008D RID: 141
	public static string str_Sprite3D;

	// Token: 0x0400008E RID: 142
	public static string str_MeshSetting;

	// Token: 0x0400008F RID: 143
	public static string str_IgnoreVerticesUV;

	// Token: 0x04000090 RID: 144
	public static string str_IgnoreVerticesColor;

	// Token: 0x04000091 RID: 145
	public static string str_IgnoreVerticesNormal;

	// Token: 0x04000092 RID: 146
	public static string str_IgnoreVerticesTangent;

	// Token: 0x04000093 RID: 147
	public static string str_Compress;

	// Token: 0x04000094 RID: 148
	public static string str_ThisfunctionneedVIP;

	// Token: 0x04000095 RID: 149
	public static string str_PleaseBindthecurrentdevice;

	// Token: 0x04000096 RID: 150
	public static string str_TerrainSetting;

	// Token: 0x04000097 RID: 151
	public static string str_ConvertTerrainToMesh;

	// Token: 0x04000098 RID: 152
	public static string str_Resolution;

	// Token: 0x04000099 RID: 153
	public static string str_GameObjectSetting;

	// Token: 0x0400009A RID: 154
	public static string str_IgnoreNotActiveGameObjects;

	// Token: 0x0400009B RID: 155
	public static string str_BatchMakeTheFirstLevelGameObjects;

	// Token: 0x0400009C RID: 156
	public static string str_Assetsplatform;

	// Token: 0x0400009D RID: 157
	public static string str_AnimationSetting;

	// Token: 0x0400009E RID: 158
	public static string str_OtherSetting;

	// Token: 0x0400009F RID: 159
	public static string str_CustomizeExportRootDirectoryName;

	// Token: 0x040000A0 RID: 160
	public static string str_SavePathcannotbeempty;

	// Token: 0x040000A1 RID: 161
	public static string str_SavePath;

	// Token: 0x040000A2 RID: 162
	public static string str_Browse;

	// Token: 0x040000A3 RID: 163
	public static string str_ClearConfig;

	// Token: 0x040000A4 RID: 164
	public static string str_LayaAirRun;

	// Token: 0x040000A5 RID: 165
	public static string str_LayaAirExport;

	// Token: 0x040000A6 RID: 166
	public static string str_Exportaddresscannotbeempty;

	// Token: 0x040000A7 RID: 167
	public static string str_JPGQuality;

	// Token: 0x040000A8 RID: 168
	public static string str_erweimaIcon;

	// Token: 0x040000A9 RID: 169
	public static string str_time;

	// Token: 0x040000AA RID: 170
	public static string str_Copy;

	// Token: 0x040000AB RID: 171
	public static string str_ip;

	// Token: 0x040000AC RID: 172
	public static CustomExport customExport;
}
