using System;

using UnityEditor;
using UnityEngine;

// Token: 0x02000026 RID: 38
class Class23 : EditorWindow
{
	// Token: 0x06000146 RID: 326 RVA: 0x0000D2A4 File Offset: 0x0000B4A4
	[MenuItem("LayaAir3D/Help/About LayaAir")]
	static void smethod_0()
	{
		Class23.class23_0 = (Class23)EditorWindow.GetWindow(typeof(Class23));
		Texture2D texture2D = new Texture2D(16, 16);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", texture2D);
		GUIContent titleContent = new GUIContent("LayaAir3D", texture2D);
		Class23.class23_0.titleContent = titleContent;
		if (Class23.string_0 != null)
		{
			LayaAir3D.ReadLanguage(1);
		}
	}

	// Token: 0x06000147 RID: 327 RVA: 0x0000D304 File Offset: 0x0000B504
	void OnGUI()
	{
		GUI.Label(new Rect(base.position.width / 2f - 70f, base.position.height / 2f - 20f, 200f, 30f), Class23.string_0);
		if (GUI.Button(new Rect(base.position.width / 2f - 70f, base.position.height / 2f + 10f, 100f, 30f), Class23.string_1))
		{
			Application.OpenURL("https://www.layabox.com");
		}
	}

	// Token: 0x06000148 RID: 328 RVA: 0x000025F9 File Offset: 0x000007F9
	public Class23()
	{
		
		
	}

	// Token: 0x04000180 RID: 384
	public static string string_0;

	// Token: 0x04000181 RID: 385
	public static string string_1;

	// Token: 0x04000182 RID: 386
	static Class23 class23_0;
}
