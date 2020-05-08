using System;

using UnityEditor;
using UnityEngine;

// Token: 0x02000029 RID: 41
class Class26 : EditorWindow
{
	// Token: 0x06000152 RID: 338 RVA: 0x0000D660 File Offset: 0x0000B860
	public static void smethod_0()
	{
		Class26.class26_0 = EditorWindow.GetWindow<Class26>(true, "");
		Class26.class26_0.Show();
		Class26.class26_0.maxSize = new Vector2((float)(Class26.int_0 + 1), (float)(Class26.int_1 + 1));
		Class26.class26_0.minSize = new Vector2((float)(Class26.int_0 + 1), (float)Class26.int_1);
		Class26.class26_0.position = new Rect((float)(Screen.currentResolution.width - Class26.int_0), (float)(Screen.currentResolution.height - Class26.int_1 - 50), (float)Class26.int_0, (float)Class26.int_1);
	}

	// Token: 0x06000153 RID: 339 RVA: 0x00002D3D File Offset: 0x00000F3D
	void OnEnable()
	{
	}

	// Token: 0x06000154 RID: 340 RVA: 0x0000D70C File Offset: 0x0000B90C
	void OnGUI()
	{
	}

	// Token: 0x06000155 RID: 341 RVA: 0x000025F9 File Offset: 0x000007F9
	public Class26()
	{
		
		
	}

	// Token: 0x06000156 RID: 342 RVA: 0x00002D57 File Offset: 0x00000F57
	// Note: this type is marked as 'beforefieldinit'.
	static Class26()
	{
		
		Class26.string_0 = "http://118.89.114.231:10003/download/idepages/unityAdv1/index.html?v=1.0.1";
	}

	// Token: 0x0400018E RID: 398
	public static int int_0;

	// Token: 0x0400018F RID: 399
	public static int int_1;

	// Token: 0x04000190 RID: 400
	public static string string_0;

	// Token: 0x04000191 RID: 401
	public static Class26 class26_0;
}
