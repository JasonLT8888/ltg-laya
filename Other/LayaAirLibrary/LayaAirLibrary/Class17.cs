using System;

using UnityEditor;
using UnityEngine;

// Token: 0x0200001C RID: 28
class Class17 : EditorWindow
{
	// Token: 0x060000B8 RID: 184 RVA: 0x0000ACC0 File Offset: 0x00008EC0
	[MenuItem("LayaAir3D/Help/Tutorial", false)]
	static void smethod_0()
	{
		Class17.class17_0 = (Class17)EditorWindow.GetWindow(typeof(Class17));
		Texture2D texture2D = new Texture2D(16, 16);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", texture2D);
		GUIContent titleContent = new GUIContent("LayaAir3D", texture2D);
		Class17.class17_0.titleContent = titleContent;
		Class17.texture2D_0 = new Texture2D(14, 14);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/Open.png", Class17.texture2D_0);
		Class17.texture2D_1 = new Texture2D(14, 14);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/Close.png", Class17.texture2D_1);
		Color textColor = EditorStyles.label.normal.textColor;
		Class17.guistyle_0.fontSize = 15;
		Class17.guistyle_0.fontStyle = FontStyle.Bold;
		Class17.guistyle_0.normal.textColor = textColor;
		Class17.guistyle_1.fontSize = 12;
		Class17.guistyle_1.normal.textColor = textColor;
		Class17.guistyle_2.fontSize = 16;
		Class17.guistyle_2.fontStyle = FontStyle.Bold;
		Class17.guistyle_2.normal.textColor = textColor;
		Class17.guistyle_3.fontSize = 12;
		Class17.guistyle_3.normal.textColor = textColor;
		Class17.texture_0 = Class17.texture2D_0;
		Class17.texture_1 = Class17.texture2D_0;
		Class17.texture_2 = Class17.texture2D_0;
		Class17.texture_3 = Class17.texture2D_0;
		Class17.texture_4 = Class17.texture2D_0;
		Class17.texture_5 = Class17.texture2D_0;
	}

	// Token: 0x060000B9 RID: 185 RVA: 0x0000AE20 File Offset: 0x00009020
	void OnGUI()
	{
		Class17.vector2_0 = GUILayout.BeginScrollView(Class17.vector2_0, new GUILayoutOption[0]);
		GUILayout.Label("", new GUILayoutOption[]
		{
			GUILayout.Height(20f)
		});
		GUILayout.Label("                            推荐使用Unity2018.4.7版本", Class17.guistyle_2, new GUILayoutOption[]
		{
			GUILayout.ExpandWidth(true)
		});
		GUILayout.Label("", new GUILayoutOption[]
		{
			GUILayout.Height(20f)
		});
		this.method_0(ref Class17.texture_0, "节点");
		if (Class17.texture_0 == Class17.texture2D_0)
		{
			this.method_1(Class17.int_1, "(1)相机");
			this.method_1(Class17.int_2, "兼容Camera组件");
			this.method_1(Class17.int_1, "(2)光照");
			this.method_1(Class17.int_2, "兼容DirectionLight组件、PointLight组件、SpotLight组件,目前Mode为RealTime时仅支持三种类型灯光各一盏");
			this.method_2(Class17.int_3, "\u00a0Type(Directional、Point、Spot)");
			this.method_2(Class17.int_3, "\u00a0Color");
			this.method_2(Class17.int_3, " Mode(RealTime、Baked)   注：暂不支持Mixed,烘焙光照贴图需要选择Baked");
			this.method_2(Class17.int_3, "\u00a0Intensity");
			this.method_1(Class17.int_1, "(3)模型");
			this.method_1(Class17.int_2, "兼容MeshRender和MeshFilter组件");
			this.method_1(Class17.int_1, "(4)粒子");
			this.method_1(Class17.int_2, "兼容ParticleSystem组件部分模块");
			this.method_2(Class17.int_3, "\u00a0Emission");
			this.method_2(Class17.int_4, "\u00a0Rate over Time(Constant)");
			this.method_2(Class17.int_4, "\u00a0Bursts");
			this.method_2(Class17.int_3, " Shape(SphereShape、HemisphereShape、BoxShape、CircleShape、ConeShape)");
			this.method_2(Class17.int_3, "\u00a0Velocity over Lifetime");
			this.method_2(Class17.int_3, "\u00a0Color over Lifetime");
			this.method_2(Class17.int_3, " Size over Lifetime");
			this.method_2(Class17.int_3, "\u00a0Texture Sheet Animation");
			this.method_2(Class17.int_3, " Rotation Over LifeTime");
			this.method_1(Class17.int_1, "(5)拖尾");
			this.method_1(Class17.int_1 + Class17.int_0, "兼容TrailRender组件");
			this.method_1(Class17.int_1, "(6)地形");
			this.method_1(Class17.int_1 + Class17.int_0, "兼容Terrain组件 仅支持地表 不支持植被  导出时会转换为静态Mesh网格");
		}
		GUILayout.Label("", new GUILayoutOption[]
		{
			GUILayout.Height(5f)
		});
		this.method_0(ref Class17.texture_1, "纹理");
		if (Class17.texture_1 == Class17.texture2D_0)
		{
			this.method_1(Class17.int_1, "兼容纹理属性面板中的部分属性");
			this.method_2(Class17.int_2, " Mip Map");
			this.method_2(Class17.int_2, " Wrap Mode");
			this.method_2(Class17.int_2, " Filter Mode");
			this.method_2(Class17.int_2, " Aniso Level");
		}
		GUILayout.Label("", new GUILayoutOption[]
		{
			GUILayout.Height(5f)
		});
		this.method_0(ref Class17.texture_2, "材质");
		if (Class17.texture_2 == Class17.texture2D_0)
		{
			this.method_1(Class17.int_1, "支持Shader列表中LayaAir3D目录中的所有Shader");
			this.method_1(Class17.int_1, "如使用非LayaAir3D Shader会强制转换为LayaAir3D的默认Shader");
		}
		GUILayout.Label("", new GUILayoutOption[]
		{
			GUILayout.Height(5f)
		});
		this.method_0(ref Class17.texture_3, "动画");
		if (Class17.texture_3 == Class17.texture2D_0)
		{
			this.method_1(Class17.int_1, "兼容Animator组件和关联的AnimatorState");
		}
		GUILayout.Label("", new GUILayoutOption[]
		{
			GUILayout.Height(5f)
		});
		this.method_0(ref Class17.texture_4, "物理");
		if (Class17.texture_4 == Class17.texture2D_0)
		{
			this.method_1(Class17.int_1, "兼容BoxCollider、SphereCollider、CapsuleCollider、MeshCollider组件");
			this.method_1(Class17.int_1, "兼容Rigidbody组件");
		}
		GUILayout.Label("", new GUILayoutOption[]
		{
			GUILayout.Height(5f)
		});
		this.method_0(ref Class17.texture_5, "光照配置");
		if (Class17.texture_5 == Class17.texture2D_0)
		{
			this.method_1(Class17.int_1, "兼容Lighting面板中的部分属性,不支持Auto Generate,需要手动点击Generate Lighting");
			this.method_1(Class17.int_2, "Scene:");
			this.method_2(Class17.int_3, " Lighting->");
			this.method_2(Class17.int_4, " Environment->");
			this.method_2(Class17.int_5, " Skybox Material(material)    注：请使用LayaAir3D/Sky目录下Shader");
			this.method_2(Class17.int_4, " Environment Lighting->");
			this.method_2(Class17.int_5, " Source(Skybox、Color)");
			this.method_2(Class17.int_5, " Ambient Color");
			this.method_2(Class17.int_5, " Ambient Mode(Realtime)");
			this.method_2(Class17.int_4, " Lightmapping Settings->");
			this.method_1(Class17.int_4, "    全部支持,但不包含 Directional Mode(Directional)    注：烘焙光照贴图必须使用Non-Directional");
			this.method_1(Class17.int_2, "Global maps:");
			this.method_1(Class17.int_2, "可导出,效果和PC、Mac & Linux Standalone保持一致");
		}
		GUILayout.EndScrollView();
	}

	// Token: 0x060000BA RID: 186 RVA: 0x0000B308 File Offset: 0x00009508
	void method_0(ref Texture texture_6, string string_0)
	{
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Label("", new GUILayoutOption[]
		{
			GUILayout.Width(15f)
		});
		if (GUILayout.Button(texture_6, Class17.guistyle_0, new GUILayoutOption[]
		{
			GUILayout.Width(15f),
			GUILayout.Height(15f)
		}))
		{
			if (texture_6 == Class17.texture2D_0)
			{
				texture_6 = Class17.texture2D_1;
			}
			else
			{
				texture_6 = Class17.texture2D_0;
			}
		}
		GUILayout.Label(string_0, Class17.guistyle_0, new GUILayoutOption[]
		{
			GUILayout.ExpandWidth(true)
		});
		GUILayout.EndHorizontal();
	}

	// Token: 0x060000BB RID: 187 RVA: 0x0000B3A8 File Offset: 0x000095A8
	void method_1(int int_6, string string_0)
	{
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Label("", new GUILayoutOption[]
		{
			GUILayout.Width((float)int_6)
		});
		GUILayout.Label(string_0, Class17.guistyle_1, new GUILayoutOption[]
		{
			GUILayout.ExpandWidth(true)
		});
		GUILayout.EndHorizontal();
	}

	// Token: 0x060000BC RID: 188 RVA: 0x0000B3FC File Offset: 0x000095FC
	void method_2(int int_6, string string_0)
	{
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Label("", new GUILayoutOption[]
		{
			GUILayout.Width((float)int_6)
		});
		GUILayout.Label(" · ", Class17.guistyle_2, new GUILayoutOption[]
		{
			GUILayout.Width(10f)
		});
		GUILayout.Label(string_0, Class17.guistyle_3, new GUILayoutOption[]
		{
			GUILayout.ExpandWidth(true)
		});
		GUILayout.EndHorizontal();
	}

	// Token: 0x060000BD RID: 189 RVA: 0x000025F9 File Offset: 0x000007F9
	public Class17()
	{
		
		
	}

	// Token: 0x060000BE RID: 190 RVA: 0x0000B470 File Offset: 0x00009670
	// Note: this type is marked as 'beforefieldinit'.
	static Class17()
	{
		
		Class17.int_0 = 18;
		Class17.int_1 = 30;
		Class17.int_2 = Class17.int_1 + Class17.int_0;
		Class17.int_3 = Class17.int_1 + Class17.int_0 * 2;
		Class17.int_4 = Class17.int_1 + Class17.int_0 * 3;
		Class17.int_5 = Class17.int_1 + Class17.int_0 * 4;
		Class17.guistyle_0 = new GUIStyle();
		Class17.guistyle_1 = new GUIStyle();
		Class17.guistyle_2 = new GUIStyle();
		Class17.guistyle_3 = new GUIStyle();
	}

	// Token: 0x04000139 RID: 313
	static Vector2 vector2_0;

	// Token: 0x0400013A RID: 314
	static Class17 class17_0;

	// Token: 0x0400013B RID: 315
	static Texture2D texture2D_0;

	// Token: 0x0400013C RID: 316
	static Texture2D texture2D_1;

	// Token: 0x0400013D RID: 317
	static int int_0;

	// Token: 0x0400013E RID: 318
	static int int_1;

	// Token: 0x0400013F RID: 319
	static int int_2;

	// Token: 0x04000140 RID: 320
	static int int_3;

	// Token: 0x04000141 RID: 321
	static int int_4;

	// Token: 0x04000142 RID: 322
	static int int_5;

	// Token: 0x04000143 RID: 323
	static GUIStyle guistyle_0;

	// Token: 0x04000144 RID: 324
	static GUIStyle guistyle_1;

	// Token: 0x04000145 RID: 325
	static GUIStyle guistyle_2;

	// Token: 0x04000146 RID: 326
	static GUIStyle guistyle_3;

	// Token: 0x04000147 RID: 327
	static Texture texture_0;

	// Token: 0x04000148 RID: 328
	static Texture texture_1;

	// Token: 0x04000149 RID: 329
	static Texture texture_2;

	// Token: 0x0400014A RID: 330
	static Texture texture_3;

	// Token: 0x0400014B RID: 331
	static Texture texture_4;

	// Token: 0x0400014C RID: 332
	static Texture texture_5;
}
