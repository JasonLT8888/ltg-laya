using System;

using UnityEditor;
using UnityEngine;

// Token: 0x02000027 RID: 39
class Class24 : EditorWindow
{
	// Token: 0x06000149 RID: 329 RVA: 0x0000D3B8 File Offset: 0x0000B5B8
	public static void smethod_0()
	{
		Class24.class24_0 = (Class24)EditorWindow.GetWindow(typeof(Class24));
		Texture2D texture2D = new Texture2D(16, 16);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", texture2D);
		GUIContent titleContent = new GUIContent("LayaAir3D", texture2D);
		Class24.class24_0.titleContent = titleContent;
		Class24.class24_0.maxSize = Class24.vector2_0;
		Class24.class24_0.minSize = Class24.vector2_0;
	}

	// Token: 0x0600014A RID: 330 RVA: 0x0000D428 File Offset: 0x0000B628
	void OnGUI()
	{
		GUI.Label(new Rect(base.position.width / 2f - 95f, base.position.height / 2f - 50f, 300f, 30f), Class24.string_0);
		GUI.Label(new Rect(base.position.width / 2f - 55f, base.position.height / 2f - 30f, 300f, 30f), Class24.string_1);
		if (GUI.Button(new Rect(base.position.width / 2f - 70f, base.position.height / 2f + 10f, 150f, 30f), Class24.string_2))
		{
			Application.OpenURL("http://nodejs.cn/");
		}
	}

	// Token: 0x0600014B RID: 331 RVA: 0x000025F9 File Offset: 0x000007F9
	public Class24()
	{
		
		
	}

	// Token: 0x0600014C RID: 332 RVA: 0x00002D11 File Offset: 0x00000F11
	// Note: this type is marked as 'beforefieldinit'.
	static Class24()
	{
		
		Class24.vector2_0 = new Vector2(300f, 200f);
	}

	// Token: 0x04000183 RID: 387
	static Vector2 vector2_0;

	// Token: 0x04000184 RID: 388
	static Class24 class24_0;

	// Token: 0x04000185 RID: 389
	public static string string_0;

	// Token: 0x04000186 RID: 390
	public static string string_1;

	// Token: 0x04000187 RID: 391
	public static string string_2;
}
