using mVjiDBJbRPt2wl7USA;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using System.Runtime.InteropServices;
using UnityEditor;
using UnityEngine;

internal class m
{
	internal class a
	{
		public b a;

		public IEnumerator b;

		public string c;

		public string d;

		public string e;

		public int f;

		public string g;

		public bool h;

		public a(IEnumerator A_0, int A_1, string A_2)
		{
			UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
			a = default(c);
			e = "";
			base._002Ector();
			b = A_0;
			f = A_1;
			g = A_2;
			d = A_1 + "_" + A_2;
			if (A_0 != null)
			{
				string[] array = A_0.ToString().Split('<', '>');
				if (array.Length == 3)
				{
					e = array[1];
				}
			}
			c = A_1 + "_" + A_2 + "_" + e;
		}

		public a(string A_0, int A_1, string A_2)
		{
			UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
			a = default(c);
			e = "";
			base._002Ector();
			e = A_0;
			f = A_1;
			g = A_2;
			d = A_1 + "_" + A_2;
			c = A_1 + "_" + A_2 + "_" + e;
		}
	}

	public interface b
	{
		bool a(float A_0);
	}

	[StructLayout(LayoutKind.Sequential, Size = 1)]
	private struct c : b
	{
		public bool a(float A_0)
		{
			return true;
		}
	}

	private struct d : b
	{
		public float a;

		public bool a(float A_0)
		{
			this.a -= A_0;
			return this.a < 0f;
		}
	}

	private struct e : b
	{
		public CustomYieldInstruction a;

		public bool a(float A_0)
		{
			return !this.a.get_keepWaiting();
		}
	}

	private struct f : b
	{
		public WWW a;

		public bool a(float A_0)
		{
			return this.a.get_isDone();
		}
	}

	private struct g : b
	{
		public AsyncOperation a;

		public bool a(float A_0)
		{
			return this.a.get_isDone();
		}
	}

	private struct h : b
	{
		public a a;

		public bool a(float A_0)
		{
			return this.a.h;
		}
	}

	private static m m_a;

	private Dictionary<string, List<a>> m_b;

	private List<List<a>> m_c;

	private Dictionary<string, Dictionary<string, a>> m_d;

	private DateTime m_e;

	public static a e(IEnumerator A_0, object A_1)
	{
		c();
		return m.m_a.b(A_0, A_1);
	}

	public static a d(string A_0, object A_1)
	{
		return a(A_0, null, A_1);
	}

	public static a a(string A_0, object A_1, object A_2)
	{
		MethodInfo method = A_2.GetType().GetMethod(A_0, BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
		if (method == null)
		{
			Debug.LogError((object)("Coroutine '" + A_0 + "' couldn't be started, the method doesn't exist!"));
		}
		object obj = (A_1 != null) ? method.Invoke(A_2, new object[1]
		{
			A_1
		}) : method.Invoke(A_2, null);
		if (obj is IEnumerator)
		{
			c();
			return m.m_a.b((IEnumerator)obj, A_2);
		}
		Debug.LogError((object)("Coroutine '" + A_0 + "' couldn't be started, the method doesn't return an IEnumerator!"));
		return null;
	}

	public static void d(IEnumerator A_0, object A_1)
	{
		c();
		m.m_a.c(A_0, A_1);
	}

	public static void c(string A_0, object A_1)
	{
		c();
		m.m_a.b(A_0, A_1);
	}

	public static void b(object A_0)
	{
		c();
		m.m_a.a(A_0);
	}

	private static void c()
	{
		if (m.m_a == null)
		{
			m.m_a = new m();
			m.m_a.b();
		}
	}

	private void b()
	{
		//IL_0017: Unknown result type (might be due to invalid IL or missing references)
		//IL_0021: Expected O, but got Unknown
		//IL_0021: Unknown result type (might be due to invalid IL or missing references)
		//IL_002b: Expected O, but got Unknown
		this.m_e = DateTime.Now;
		EditorApplication.update = (CallbackFunction)(object)(CallbackFunction)Delegate.Combine((Delegate)(object)EditorApplication.update, (Delegate)new CallbackFunction(a));
	}

	private void c(IEnumerator A_0, object A_1)
	{
		d(a(A_0, A_1));
	}

	private void b(string A_0, object A_1)
	{
		d(a(A_0, A_1));
	}

	private void d(a A_0)
	{
		if (this.m_b.ContainsKey(A_0.c))
		{
			this.m_d[A_0.d].Remove(A_0.c);
			this.m_b.Remove(A_0.c);
		}
	}

	private void a(object A_0)
	{
		a a = this.a((IEnumerator)null, A_0);
		if (this.m_d.ContainsKey(a.d))
		{
			foreach (KeyValuePair<string, a> item in this.m_d[a.d])
			{
				this.m_b.Remove(item.Value.c);
			}
			this.m_d.Remove(a.d);
		}
	}

	private a b(IEnumerator A_0, object A_1)
	{
		if (A_0 == null)
		{
			Debug.LogException(new Exception("IEnumerator is null!"), (Object)null);
		}
		a a = this.a(A_0, A_1);
		c(a);
		return a;
	}

	private void c(a A_0)
	{
		if (!this.m_b.ContainsKey(A_0.c))
		{
			List<a> value = new List<a>();
			this.m_b.Add(A_0.c, value);
		}
		this.m_b[A_0.c].Add(A_0);
		if (!this.m_d.ContainsKey(A_0.d))
		{
			Dictionary<string, a> value2 = new Dictionary<string, a>();
			this.m_d.Add(A_0.d, value2);
		}
		if (!this.m_d[A_0.d].ContainsKey(A_0.c))
		{
			this.m_d[A_0.d].Add(A_0.c, A_0);
		}
		b(A_0);
	}

	private a a(IEnumerator A_0, object A_1)
	{
		return new a(A_0, A_1.GetHashCode(), A_1.GetType().ToString());
	}

	private a a(string A_0, object A_1)
	{
		return new a(A_0, A_1.GetHashCode(), A_1.GetType().ToString());
	}

	private void a()
	{
		float a_ = (float)(DateTime.Now.Subtract(this.m_e).TotalMilliseconds / 1000.0);
		this.m_e = DateTime.Now;
		if (this.m_b.Count == 0)
		{
			return;
		}
		this.m_c.Clear();
		foreach (KeyValuePair<string, List<a>> item in this.m_b)
		{
			this.m_c.Add(item.Value);
		}
		for (int num = this.m_c.Count - 1; num >= 0; num--)
		{
			List<a> list = this.m_c[num];
			for (int num2 = list.Count - 1; num2 >= 0; num2--)
			{
				a a = list[num2];
				if (a.a.a(a_))
				{
					if (!b(a))
					{
						list.RemoveAt(num2);
						a.a = null;
						a.h = true;
					}
					if (list.Count == 0)
					{
						this.m_b.Remove(a.d);
					}
				}
			}
		}
	}

	private static bool b(a A_0)
	{
		if (A_0.b.MoveNext())
		{
			return a(A_0);
		}
		return false;
	}

	private static bool a(a A_0)
	{
		//IL_00b4: Unknown result type (might be due to invalid IL or missing references)
		//IL_00be: Expected O, but got Unknown
		//IL_010c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0116: Expected O, but got Unknown
		object current = A_0.b.Current;
		if (current == null)
		{
			A_0.a = default(c);
		}
		else if (current is WaitForSeconds)
		{
			float num = float.Parse(a(typeof(WaitForSeconds), current, "m_Seconds").ToString());
			A_0.a = new d
			{
				a = num
			};
		}
		else if (current is CustomYieldInstruction)
		{
			A_0.a = new e
			{
				a = (current as CustomYieldInstruction)
			};
		}
		else if (current is WWW)
		{
			A_0.a = new f
			{
				a = (WWW)(object)(WWW)current
			};
		}
		else if (current is WaitForFixedUpdate || current is WaitForEndOfFrame)
		{
			A_0.a = default(c);
		}
		else if (current is AsyncOperation)
		{
			A_0.a = new g
			{
				a = (AsyncOperation)(object)(AsyncOperation)current
			};
		}
		else if (current is a)
		{
			A_0.a = new h
			{
				a = (a)current
			};
		}
		else
		{
			Debug.LogException(new Exception("<" + A_0.e + "> yielded an unknown or unsupported type! (" + current.GetType() + ")"), (Object)null);
			A_0.a = default(c);
		}
		return true;
	}

	private static object a(Type A_0, object A_1, string A_2)
	{
		BindingFlags bindingAttr = BindingFlags.Instance | BindingFlags.Static | BindingFlags.Public | BindingFlags.NonPublic;
		return A_0.GetField(A_2, bindingAttr).GetValue(A_1);
	}

	public m()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		this.m_b = new Dictionary<string, List<a>>();
		this.m_c = new List<List<a>>();
		this.m_d = new Dictionary<string, Dictionary<string, a>>();
		base._002Ector();
	}

	static m()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
	}
}
