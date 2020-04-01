using mVjiDBJbRPt2wl7USA;
using UnityEditor;
using UnityEngine;

internal class k : EditorWindow
{
	public static int a;

	public static int b;

	public static string c;

	public static k d;

	private WebViewHook e;

	public static void a()
	{
		//IL_002f: Unknown result type (might be due to invalid IL or missing references)
		//IL_004c: Unknown result type (might be due to invalid IL or missing references)
		//IL_005b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0060: Unknown result type (might be due to invalid IL or missing references)
		//IL_006f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0074: Unknown result type (might be due to invalid IL or missing references)
		//IL_0092: Unknown result type (might be due to invalid IL or missing references)
		d = EditorWindow.GetWindow<k>(true, "");
		((EditorWindow)d).Show();
		((EditorWindow)d).set_maxSize(new Vector2((float)(k.a + 1), (float)(b + 1)));
		((EditorWindow)d).set_minSize(new Vector2((float)(k.a + 1), (float)b));
		k k = d;
		Resolution currentResolution = Screen.get_currentResolution();
		float num = ((Resolution)(ref currentResolution)).get_width() - k.a;
		currentResolution = Screen.get_currentResolution();
		((EditorWindow)k).set_position(new Rect(num, (float)(((Resolution)(ref currentResolution)).get_height() - b - 50), (float)k.a, (float)b));
	}

	private void OnEnable()
	{
		if (!Object.op_Implicit((Object)(object)e))
		{
			e = ScriptableObject.CreateInstance<WebViewHook>();
		}
	}

	private void OnGUI()
	{
		//IL_003a: Unknown result type (might be due to invalid IL or missing references)
		if (e.Hook((EditorWindow)(object)this))
		{
			e.LoadURL(c);
		}
		e.OnGUI(new Rect(0f, 0f, (float)k.a, (float)b));
	}

	public k()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		((EditorWindow)this)._002Ector();
	}

	static k()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		c = "http://118.89.114.231:10003/download/idepages/unityAdv1/index.html?v=1.0.1";
	}
}
