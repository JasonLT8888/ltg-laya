using System;

using UnityEditor;
using UnityEngine;

// Token: 0x02000028 RID: 40
class Class25 : EditorWindow
{
	// Token: 0x0600014D RID: 333 RVA: 0x0000D528 File Offset: 0x0000B728
	public static void smethod_0()
	{
		Class25.class25_0 = (Class25)EditorWindow.GetWindow(typeof(Class25), true);
		Texture2D texture2D = new Texture2D(16, 16);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", texture2D);
		GUIContent titleContent = new GUIContent("LayaAir3D", texture2D);
		Class25.class25_0.titleContent = titleContent;
		switch (LoginWindow.int_0)
		{
		case 1:
			Class25.string_4 = Class25.string_0;
			break;
		case 2:
			Class25.string_4 = Class25.string_1;
			break;
		case 3:
			Class25.string_4 = Class25.string_2;
			break;
		case 4:
			Class25.string_4 = Class25.string_3;
			break;
		}
		PaymentPage.bool_2 = true;
		Class25.class25_0.minSize = new Vector2(400f, 180f);
		Class25.class25_0.maxSize = new Vector2(400f, 180f);
	}

	// Token: 0x0600014E RID: 334 RVA: 0x0000D604 File Offset: 0x0000B804
	void OnGUI()
	{
		GUI.Label(new Rect(base.position.width / 2f - 160f, base.position.height / 2f - 20f, 350f, 30f), Class25.string_4);
	}

	// Token: 0x0600014F RID: 335 RVA: 0x000026A2 File Offset: 0x000008A2
	void OnDestroy()
	{
		PaymentPage.bool_2 = false;
	}

	// Token: 0x06000150 RID: 336 RVA: 0x000025F9 File Offset: 0x000007F9
	public Class25()
	{
		
		
	}

	// Token: 0x06000151 RID: 337 RVA: 0x00002D2C File Offset: 0x00000F2C
	// Note: this type is marked as 'beforefieldinit'.
	static Class25()
	{
		
		Class25.string_4 = "";
	}

	// Token: 0x04000188 RID: 392
	static Class25 class25_0;

	// Token: 0x04000189 RID: 393
	public static string string_0;

	// Token: 0x0400018A RID: 394
	public static string string_1;

	// Token: 0x0400018B RID: 395
	public static string string_2;

	// Token: 0x0400018C RID: 396
	public static string string_3;

	// Token: 0x0400018D RID: 397
	static string string_4;
}
