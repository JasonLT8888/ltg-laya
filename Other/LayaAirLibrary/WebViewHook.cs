using mVjiDBJbRPt2wl7USA;
using System;
using System.Linq;
using System.Reflection;
using UnityEditor;
using UnityEngine;

public class WebViewHook : ScriptableObject
{
	private Object m_a;

	private EditorWindow b;

	private object c;

	private static Type d;

	private static FieldInfo e;

	private static MethodInfo f;

	private static MethodInfo g;

	private static MethodInfo h;

	private static MethodInfo i;

	private static MethodInfo j;

	private static MethodInfo k;

	private static MethodInfo l;

	private static MethodInfo m;

	private static MethodInfo n;

	private static MethodInfo o;

	private static MethodInfo p;

	private static MethodInfo q;

	private static MethodInfo r;

	private static MethodInfo s;

	private static MethodInfo t;

	private static MethodInfo u;

	private static Func<Rect, Rect> v;

	public Action<string> LoadError;

	public Action InitScripting;

	public Action<string> LocationChanged;

	static WebViewHook()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		d = typeof(Editor).Assembly.GetTypes().First((Type x) => x.Name == "WebView");
		e = typeof(EditorWindow).GetField("m_Parent", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		f = d.GetMethod("Show", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		g = d.GetMethod("Hide", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		h = d.GetMethod("Back", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		i = d.GetMethod("Reload", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		j = d.GetMethod("Forward", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		l = d.GetMethod("InitWebView", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		k = d.GetMethod("SetSizeAndPosition", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		q = d.GetMethod("SetHostView", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		n = d.GetMethod("AllowRightClickMenu", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		m = d.GetMethod("SetDelegateObject", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		o = d.GetMethod("ShowDevTools", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		p = d.GetMethod("DefineScriptObject", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		r = d.GetMethod("ExecuteJavascript", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		s = d.GetMethod("LoadURL", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		t = d.GetMethod("HasApplicationFocus", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		u = d.GetMethod("SetApplicationFocus", BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.FlattenHierarchy);
		v = (Func<Rect, Rect>)Delegate.CreateDelegate(typeof(Func<Rect, Rect>), typeof(GUI).Assembly.GetTypes().First((Type x) => x.Name == "GUIClip").GetMethod("Unclip", BindingFlags.Static | BindingFlags.Public, null, new Type[1]
		{
			typeof(Rect)
		}, null));
	}

	~WebViewHook()
	{
		OnDisable();
	}

	private void OnEnable()
	{
		if (!Object.op_Implicit(this.m_a))
		{
			this.m_a = (Object)(object)ScriptableObject.CreateInstance(d);
			this.m_a.set_hideFlags((HideFlags)52);
			((Object)this).set_hideFlags((HideFlags)52);
		}
	}

	private void OnDisable()
	{
		if (Object.op_Implicit(this.m_a))
		{
			Detach();
		}
	}

	private void OnDestroy()
	{
		Object.DestroyImmediate(this.m_a);
		this.m_a = null;
	}

	public bool Hook(EditorWindow host)
	{
		if ((Object)(object)host == (Object)(object)b)
		{
			return false;
		}
		if (!Object.op_Implicit(this.m_a))
		{
			OnEnable();
		}
		Invoke(l, e.GetValue(c = (b = host)), 0, 0, 1, 1, false);
		Invoke(m, this);
		Invoke(n, true);
		return true;
	}

	public void Detach()
	{
		Invoke(q, c = null);
	}

	private void a(object A_0)
	{
		Invoke(q, c = A_0);
		Hide();
		Show();
	}

	private void a(Rect A_0)
	{
		Invoke(k, (int)((Rect)(ref A_0)).get_x(), (int)((Rect)(ref A_0)).get_y(), (int)((Rect)(ref A_0)).get_width(), (int)((Rect)(ref A_0)).get_height());
	}

	private void OnGUI()
	{
	}

	public void OnGUI(Rect r)
	{
		//IL_004b: Unknown result type (might be due to invalid IL or missing references)
		//IL_004c: Unknown result type (might be due to invalid IL or missing references)
		if (Object.op_Implicit((Object)(object)b))
		{
			object value = e.GetValue(b);
			if (c != value)
			{
				a(value);
			}
			else
			{
				Invoke(q, value);
			}
		}
		a(v(r));
	}

	public void AllowRightClickMenu(bool yes)
	{
		Invoke(n, yes);
	}

	public void Forward()
	{
		Invoke(j);
	}

	public void Back()
	{
		Invoke(h);
	}

	public void Show()
	{
		Invoke(f);
	}

	public void Hide()
	{
		Invoke(g);
	}

	public void Reload()
	{
		Invoke(i);
	}

	public bool HasApplicationFocus()
	{
		return (bool)t.Invoke(this.m_a, null);
	}

	public void SetApplicationFocus(bool focus)
	{
		Invoke(u, focus);
	}

	protected void ShowDevTools()
	{
		Invoke(o);
	}

	public void LoadURL(string url)
	{
		Invoke(s, url);
	}

	public void LoadHTML(string html)
	{
		Invoke(s, "data:text/html;charset=utf-8," + html);
	}

	public void LoadFile(string path)
	{
		Invoke(s, "file:///" + path);
	}

	protected void DefineScriptObject(string path, ScriptableObject obj)
	{
		Invoke(p, path, obj);
	}

	protected void SetDelegateObject(ScriptableObject obj)
	{
		Invoke(m, obj);
	}

	public void ExecuteJavascript(string js)
	{
		Invoke(r, js);
	}

	private void Invoke(MethodInfo A_0, params object[] A_1)
	{
		try
		{
			A_0.Invoke(this.m_a, A_1);
		}
		catch (Exception)
		{
		}
	}

	protected virtual void OnLocationChanged(string url)
	{
		if (LocationChanged != null)
		{
			LocationChanged(url);
		}
	}

	protected virtual void OnLoadError(string url)
	{
		if (LoadError != null)
		{
			LoadError(url);
		}
		else
		{
			Debug.LogError((object)("WebView has failed to load " + url));
		}
	}

	protected virtual void OnInitScripting()
	{
		if (InitScripting != null)
		{
			InitScripting();
		}
	}

	protected virtual void OnOpenExternalLink(string url)
	{
	}

	protected virtual void OnWebViewDirty()
	{
	}

	protected virtual void OnDownloadProgress(string id, string message, ulong bytes, ulong total)
	{
	}

	protected virtual void OnBatchMode()
	{
	}

	protected virtual void OnReceiveTitle(string title)
	{
	}

	protected virtual void OnDomainReload()
	{
	}

	public WebViewHook()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		((ScriptableObject)this)._002Ector();
	}
}
