using mVjiDBJbRPt2wl7USA;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Reflection;
using System.Text;

[DefaultMember("Item")]
internal class g
{
	public enum a
	{
		a,
		b,
		c,
		d,
		e,
		f,
		g
	}

	public delegate void b(global::g A_0);

	private delegate void c(string A_0);

	private delegate void d(global::g A_0);

	private static readonly char[] m_e;

	private a m_f;

	private List<global::g> m_g;

	public List<string> h;

	public string i;

	public float j;

	private bool m_k;

	public long l;

	public bool m;

	private static readonly Stopwatch m_o;

	private bool x()
	{
		if (this.m_f != global::g.a.e)
		{
			return this.m_f == global::g.a.d;
		}
		return true;
	}

	public int y()
	{
		if (this.m_g == null)
		{
			return -1;
		}
		return this.m_g.Count;
	}

	public float z()
	{
		return j;
	}

	private static global::g w()
	{
		return a(global::g.a.a);
	}

	private static global::g v()
	{
		return a(global::g.a.d);
	}

	private static global::g u()
	{
		return a(global::g.a.e);
	}

	public g(a A_0)
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
		this.m_f = A_0;
		switch (A_0)
		{
		case global::g.a.e:
			this.m_g = new List<global::g>();
			break;
		case global::g.a.d:
			this.m_g = new List<global::g>();
			h = new List<string>();
			break;
		}
	}

	private g(bool A_0)
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
		this.m_f = global::g.a.f;
		m = A_0;
	}

	private g(float A_0)
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
		this.m_f = global::g.a.c;
		j = A_0;
	}

	private g(int A_0)
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
		this.m_f = global::g.a.c;
		l = A_0;
		this.m_k = true;
		j = A_0;
	}

	private g(long A_0)
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
		this.m_f = global::g.a.c;
		l = A_0;
		this.m_k = true;
		j = A_0;
	}

	private g(Dictionary<string, string> A_0)
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
		this.m_f = global::g.a.d;
		h = new List<string>();
		this.m_g = new List<global::g>();
		foreach (KeyValuePair<string, string> item in A_0)
		{
			h.Add(item.Key);
			this.m_g.Add(f(item.Value));
		}
	}

	private g(Dictionary<string, global::g> A_0)
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
		this.m_f = global::g.a.d;
		h = new List<string>();
		this.m_g = new List<global::g>();
		foreach (KeyValuePair<string, global::g> item in A_0)
		{
			h.Add(item.Key);
			this.m_g.Add(item.Value);
		}
	}

	private g(b A_0)
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
		A_0(this);
	}

	private g(global::g[] A_0)
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
		this.m_f = global::g.a.e;
		this.m_g = new List<global::g>(A_0);
	}

	private static global::g g(string A_0)
	{
		return f(A_0);
	}

	private void e(global::g A_0)
	{
		this.m_g.AddRange(A_0.m_g);
		h.AddRange(A_0.h);
		i = A_0.i;
		j = A_0.j;
		this.m_k = A_0.m_k;
		l = A_0.l;
		m = A_0.m;
		this.m_f = A_0.m_f;
	}

	public static global::g t()
	{
		return new global::g();
	}

	public static global::g a(a A_0)
	{
		global::g g = t();
		g.m_f = A_0;
		switch (A_0)
		{
		case global::g.a.e:
			g.m_g = new List<global::g>();
			break;
		case global::g.a.d:
			g.m_g = new List<global::g>();
			g.h = new List<string>();
			break;
		}
		return g;
	}

	public static global::g e(bool A_0)
	{
		global::g obj = t();
		obj.m_f = global::g.a.f;
		obj.m = A_0;
		return obj;
	}

	public static global::g a(float A_0)
	{
		global::g obj = t();
		obj.m_f = global::g.a.c;
		obj.j = A_0;
		return obj;
	}

	public static global::g a(int A_0)
	{
		global::g obj = t();
		obj.m_f = global::g.a.c;
		obj.j = A_0;
		obj.m_k = true;
		obj.l = A_0;
		return obj;
	}

	public static global::g a(long A_0)
	{
		global::g obj = t();
		obj.m_f = global::g.a.c;
		obj.j = A_0;
		obj.m_k = true;
		obj.l = A_0;
		return obj;
	}

	public static global::g f(string A_0)
	{
		global::g obj = t();
		obj.m_f = global::g.a.b;
		obj.i = A_0;
		return obj;
	}

	public static global::g e(string A_0)
	{
		global::g obj = t();
		obj.m_f = global::g.a.g;
		obj.i = A_0;
		return obj;
	}

	public static global::g d(string A_0, int A_1 = -2, bool A_2 = false, bool A_3 = false)
	{
		global::g obj = t();
		obj.a(A_0, A_1, A_2, A_3);
		return obj;
	}

	private static global::g d(b A_0)
	{
		global::g g = t();
		A_0(g);
		return g;
	}

	private static global::g a(Dictionary<string, string> A_0)
	{
		global::g g = t();
		g.m_f = global::g.a.d;
		g.h = new List<string>();
		g.m_g = new List<global::g>();
		foreach (KeyValuePair<string, string> item in A_0)
		{
			g.h.Add(item.Key);
			g.m_g.Add(f(item.Value));
		}
		return g;
	}

	private g()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
	}

	public g(string A_0, int A_1 = -2, bool A_2 = false, bool A_3 = false)
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
		a(A_0, A_1, A_2, A_3);
	}

	private void a(string A_0, int A_1 = -2, bool A_2 = false, bool A_3 = false)
	{
		if (!string.IsNullOrEmpty(A_0))
		{
			A_0 = A_0.Trim(global::g.m_e);
			if (A_3 && A_0[0] != '[' && A_0[0] != '{')
			{
				this.m_f = global::g.a.a;
			}
			else if (A_0.Length > 0)
			{
				if (string.Compare(A_0, "true", ignoreCase: true) == 0)
				{
					this.m_f = global::g.a.f;
					m = true;
					return;
				}
				if (string.Compare(A_0, "false", ignoreCase: true) == 0)
				{
					this.m_f = global::g.a.f;
					m = false;
					return;
				}
				if (string.Compare(A_0, "null", ignoreCase: true) == 0)
				{
					this.m_f = global::g.a.a;
					return;
				}
				if (A_0 == "\"INFINITY\"")
				{
					this.m_f = global::g.a.c;
					j = float.PositiveInfinity;
					return;
				}
				if (A_0 == "\"NEGINFINITY\"")
				{
					this.m_f = global::g.a.c;
					j = float.NegativeInfinity;
					return;
				}
				if (A_0 == "\"NaN\"")
				{
					this.m_f = global::g.a.c;
					j = float.NaN;
					return;
				}
				if (A_0[0] == '"')
				{
					this.m_f = global::g.a.b;
					i = A_0.Substring(1, A_0.Length - 2);
					return;
				}
				int num = 1;
				int num2 = 0;
				switch (A_0[num2])
				{
				case '{':
					this.m_f = global::g.a.d;
					h = new List<string>();
					this.m_g = new List<global::g>();
					break;
				case '[':
					this.m_f = global::g.a.e;
					this.m_g = new List<global::g>();
					break;
				default:
					try
					{
						j = Convert.ToSingle(A_0);
						if (!A_0.Contains("."))
						{
							l = Convert.ToInt64(A_0);
							this.m_k = true;
						}
						this.m_f = global::g.a.c;
					}
					catch (FormatException)
					{
						this.m_f = global::g.a.a;
					}
					return;
				}
				string item = "";
				bool flag = false;
				bool flag2 = false;
				int num3 = 0;
				while (++num2 < A_0.Length)
				{
					if (Array.IndexOf(global::g.m_e, A_0[num2]) > -1)
					{
						continue;
					}
					if (A_0[num2] == '\\')
					{
						num2++;
						continue;
					}
					if (A_0[num2] == '"')
					{
						if (flag)
						{
							if (!flag2 && num3 == 0 && this.m_f == global::g.a.d)
							{
								item = A_0.Substring(num + 1, num2 - num - 1);
							}
							flag = false;
						}
						else
						{
							if (num3 == 0 && this.m_f == global::g.a.d)
							{
								num = num2;
							}
							flag = true;
						}
					}
					if (flag)
					{
						continue;
					}
					if (this.m_f == global::g.a.d && num3 == 0 && A_0[num2] == ':')
					{
						num = num2 + 1;
						flag2 = true;
					}
					if (A_0[num2] == '[' || A_0[num2] == '{')
					{
						num3++;
					}
					else if (A_0[num2] == ']' || A_0[num2] == '}')
					{
						num3--;
					}
					if ((A_0[num2] != ',' || num3 != 0) && num3 >= 0)
					{
						continue;
					}
					flag2 = false;
					string text = A_0.Substring(num, num2 - num).Trim(global::g.m_e);
					if (text.Length > 0)
					{
						if (this.m_f == global::g.a.d)
						{
							h.Add(item);
						}
						if (A_1 != -1)
						{
							this.m_g.Add(d(text, (A_1 < -1) ? (-2) : (A_1 - 1), A_2: false, A_3: false));
						}
						else if (A_2)
						{
							this.m_g.Add(e(text));
						}
					}
					num = num2 + 1;
				}
			}
			else
			{
				this.m_f = global::g.a.a;
			}
		}
		else
		{
			this.m_f = global::g.a.a;
		}
	}

	private bool q()
	{
		return this.m_f == global::g.a.c;
	}

	private bool p()
	{
		return this.m_f == global::g.a.a;
	}

	private bool o()
	{
		return this.m_f == global::g.a.b;
	}

	private bool n()
	{
		return this.m_f == global::g.a.f;
	}

	private bool k()
	{
		return this.m_f == global::g.a.e;
	}

	private bool g()
	{
		if (this.m_f != global::g.a.d)
		{
			return this.m_f == global::g.a.g;
		}
		return true;
	}

	public void f(bool A_0)
	{
		f(e(A_0));
	}

	public void d(float A_0)
	{
		f(a(A_0));
	}

	public void d(int A_0)
	{
		f(a(A_0));
	}

	public void k(string A_0)
	{
		f(f(A_0));
	}

	private void a(b A_0)
	{
		f(d(A_0));
	}

	public void f(global::g A_0)
	{
		if (!a(A_0))
		{
			return;
		}
		if (this.m_f != global::g.a.e)
		{
			this.m_f = global::g.a.e;
			if (this.m_g == null)
			{
				this.m_g = new List<global::g>();
			}
		}
		this.m_g.Add(A_0);
	}

	public void d(string A_0, bool A_1)
	{
		d(A_0, e(A_1));
	}

	public void d(string A_0, float A_1)
	{
		d(A_0, a(A_1));
	}

	public void d(string A_0, int A_1)
	{
		d(A_0, a(A_1));
	}

	private void a(string A_0, long A_1)
	{
		d(A_0, a(A_1));
	}

	private void a(string A_0, b A_1)
	{
		d(A_0, d(A_1));
	}

	public void a(string A_0, string A_1)
	{
		d(A_0, f(A_1));
	}

	public void d(string A_0, global::g A_1)
	{
		if (!a(A_1))
		{
			return;
		}
		if (this.m_f != global::g.a.d)
		{
			if (h == null)
			{
				h = new List<string>();
			}
			if (this.m_f == global::g.a.e)
			{
				for (int i = 0; i < this.m_g.Count; i++)
				{
					h.Add(string.Concat(i));
				}
			}
			else if (this.m_g == null)
			{
				this.m_g = new List<global::g>();
			}
			this.m_f = global::g.a.d;
		}
		h.Add(A_0);
		this.m_g.Add(A_1);
	}

	public void d(string A_0, string A_1)
	{
		a(A_0, f(A_1));
	}

	private void a(string A_0, bool A_1)
	{
		a(A_0, e(A_1));
	}

	private void a(string A_0, float A_1)
	{
		a(A_0, a(A_1));
	}

	private void a(string A_0, int A_1)
	{
		a(A_0, a(A_1));
	}

	private void a(string A_0, global::g A_1)
	{
		if (a(A_0))
		{
			this.m_g.Remove(o(A_0));
			h.Remove(A_0);
		}
		d(A_0, A_1);
	}

	private void d(string A_0)
	{
		if (h.IndexOf(A_0) > -1)
		{
			this.m_g.RemoveAt(h.IndexOf(A_0));
			h.Remove(A_0);
		}
	}

	private bool a(out bool A_0, string A_1, bool A_2)
	{
		A_0 = A_2;
		return a(ref A_0, A_1);
	}

	private bool a(ref bool A_0, string A_1, c A_2 = null)
	{
		if (this.m_f == global::g.a.d)
		{
			int num = h.IndexOf(A_1);
			if (num >= 0)
			{
				A_0 = this.m_g[num].m;
				return true;
			}
		}
		A_2?.Invoke(A_1);
		return false;
	}

	private bool a(out float A_0, string A_1, float A_2)
	{
		A_0 = A_2;
		return a(ref A_0, A_1);
	}

	private bool a(ref float A_0, string A_1, c A_2 = null)
	{
		if (this.m_f == global::g.a.d)
		{
			int num = h.IndexOf(A_1);
			if (num >= 0)
			{
				A_0 = this.m_g[num].j;
				return true;
			}
		}
		A_2?.Invoke(A_1);
		return false;
	}

	private bool a(out int A_0, string A_1, int A_2)
	{
		A_0 = A_2;
		return a(ref A_0, A_1);
	}

	private bool a(ref int A_0, string A_1, c A_2 = null)
	{
		if (g())
		{
			int num = h.IndexOf(A_1);
			if (num >= 0)
			{
				A_0 = (int)this.m_g[num].j;
				return true;
			}
		}
		A_2?.Invoke(A_1);
		return false;
	}

	private bool a(out long A_0, string A_1, long A_2)
	{
		A_0 = A_2;
		return a(ref A_0, A_1);
	}

	private bool a(ref long A_0, string A_1, c A_2 = null)
	{
		if (g())
		{
			int num = h.IndexOf(A_1);
			if (num >= 0)
			{
				A_0 = (long)this.m_g[num].j;
				return true;
			}
		}
		A_2?.Invoke(A_1);
		return false;
	}

	private bool a(out uint A_0, string A_1, uint A_2)
	{
		A_0 = A_2;
		return a(ref A_0, A_1);
	}

	private bool a(ref uint A_0, string A_1, c A_2 = null)
	{
		if (g())
		{
			int num = h.IndexOf(A_1);
			if (num >= 0)
			{
				A_0 = (uint)this.m_g[num].j;
				return true;
			}
		}
		A_2?.Invoke(A_1);
		return false;
	}

	private bool a(out string A_0, string A_1, string A_2)
	{
		A_0 = A_2;
		return a(ref A_0, A_1);
	}

	private bool a(ref string A_0, string A_1, c A_2 = null)
	{
		if (g())
		{
			int num = h.IndexOf(A_1);
			if (num >= 0)
			{
				A_0 = this.m_g[num].i;
				return true;
			}
		}
		A_2?.Invoke(A_1);
		return false;
	}

	private void a(string A_0, d A_1, c A_2 = null)
	{
		if (A_1 != null && g())
		{
			int num = h.IndexOf(A_0);
			if (num >= 0)
			{
				A_1(this.m_g[num]);
				return;
			}
		}
		A_2?.Invoke(A_0);
	}

	public global::g n(string A_0)
	{
		if (g())
		{
			for (int i = 0; i < h.Count; i++)
			{
				if (h[i] == A_0)
				{
					return this.m_g[i];
				}
			}
		}
		return null;
	}

	private bool a(string[] A_0)
	{
		if (!g())
		{
			return false;
		}
		for (int i = 0; i < A_0.Length; i++)
		{
			if (!h.Contains(A_0[i]))
			{
				return false;
			}
		}
		return true;
	}

	private bool a(string A_0)
	{
		if (!g())
		{
			return false;
		}
		for (int i = 0; i < h.Count; i++)
		{
			if (h[i] == A_0)
			{
				return true;
			}
		}
		return false;
	}

	public void aa()
	{
		this.m_f = global::g.a.a;
		if (this.m_g != null)
		{
			this.m_g.Clear();
		}
		if (h != null)
		{
			h.Clear();
		}
		i = "";
		j = 0f;
		m = false;
	}

	private global::g f()
	{
		return d(g(A_0: true), -2, A_2: false, A_3: false);
	}

	private void d(global::g A_0)
	{
		a(this, A_0);
	}

	private static void a(global::g A_0, global::g A_1)
	{
		if (A_0.m_f == global::g.a.a)
		{
			A_0.e(A_1);
		}
		else if (A_0.m_f == global::g.a.d && A_1.m_f == global::g.a.d)
		{
			for (int i = 0; i < A_1.m_g.Count; i++)
			{
				string a_ = A_1.h[i];
				if (A_1.e(i).x())
				{
					if (A_0.a(a_))
					{
						a(A_0.o(a_), A_1.e(i));
					}
					else
					{
						A_0.d(a_, A_1.e(i));
					}
				}
				else if (A_0.a(a_))
				{
					A_0.a(a_, A_1.e(i));
				}
				else
				{
					A_0.d(a_, A_1.e(i));
				}
			}
		}
		else
		{
			if (A_0.m_f != global::g.a.e || A_1.m_f != global::g.a.e || A_1.y() > A_0.y())
			{
				return;
			}
			for (int j = 0; j < A_1.m_g.Count; j++)
			{
				if (A_0.e(j).m_f == A_1.e(j).m_f)
				{
					if (A_0.e(j).x())
					{
						a(A_0.e(j), A_1.e(j));
					}
					else
					{
						A_0.a(j, A_1.e(j));
					}
				}
			}
		}
	}

	private void e()
	{
		if (this.m_f != global::g.a.g)
		{
			i = g(A_0: true);
			this.m_f = global::g.a.g;
		}
	}

	private IEnumerable d()
	{
		return new e(-2)
		{
			d = this
		};
	}

	public string g(bool A_0 = true)
	{
		StringBuilder stringBuilder = new StringBuilder();
		a(0, stringBuilder, A_0);
		return stringBuilder.ToString();
	}

	private IEnumerable<string> d(bool A_0 = false)
	{
		return new f(-2)
		{
			d = this,
			f = A_0
		};
	}

	private IEnumerable d(int A_0, StringBuilder A_1, bool A_2 = false)
	{
		return new g(-2)
		{
			f = this,
			e = A_0,
			h = A_1,
			j = A_2
		};
	}

	private void a(int A_0, StringBuilder A_1, bool A_2 = true)
	{
		if (A_0++ > 100)
		{
			return;
		}
		switch (this.m_f)
		{
		case global::g.a.g:
			A_1.Append(this.i);
			break;
		case global::g.a.b:
			A_1.AppendFormat("\"{0}\"", this.i);
			break;
		case global::g.a.c:
			if (this.m_k)
			{
				A_1.Append(this.l.ToString());
			}
			else if (float.IsInfinity(this.j))
			{
				A_1.Append("\"INFINITY\"");
			}
			else if (float.IsNegativeInfinity(this.j))
			{
				A_1.Append("\"NEGINFINITY\"");
			}
			else if (float.IsNaN(this.j))
			{
				A_1.Append("\"NaN\"");
			}
			else
			{
				A_1.Append(this.j.ToString());
			}
			break;
		case global::g.a.d:
			A_1.Append("{");
			if (this.m_g.Count > 0)
			{
				if (A_2)
				{
					A_1.Append("\n");
				}
				for (int i = 0; i < this.m_g.Count; i++)
				{
					string arg = h[i];
					global::g g = this.m_g[i];
					if (!a(g))
					{
						continue;
					}
					if (A_2)
					{
						for (int j = 0; j < A_0; j++)
						{
							A_1.Append("\t");
						}
					}
					A_1.AppendFormat("\"{0}\":", arg);
					g.a(A_0, A_1, A_2);
					A_1.Append(",");
					if (A_2)
					{
						A_1.Append("\n");
					}
				}
				if (A_2)
				{
					A_1.Length -= 2;
				}
				else
				{
					A_1.Length--;
				}
			}
			if (A_2 && this.m_g.Count > 0)
			{
				A_1.Append("\n");
				for (int k = 0; k < A_0 - 1; k++)
				{
					A_1.Append("\t");
				}
			}
			A_1.Append("}");
			break;
		case global::g.a.e:
			A_1.Append("[");
			if (this.m_g.Count > 0)
			{
				if (A_2)
				{
					A_1.Append("\n");
				}
				for (int l = 0; l < this.m_g.Count; l++)
				{
					if (!a(this.m_g[l]))
					{
						continue;
					}
					if (A_2)
					{
						for (int m = 0; m < A_0; m++)
						{
							A_1.Append("\t");
						}
					}
					this.m_g[l].a(A_0, A_1, A_2);
					A_1.Append(",");
					if (A_2)
					{
						A_1.Append("\n");
					}
				}
				if (A_2)
				{
					A_1.Length -= 2;
				}
				else
				{
					A_1.Length--;
				}
			}
			if (A_2 && this.m_g.Count > 0)
			{
				A_1.Append("\n");
				for (int n = 0; n < A_0 - 1; n++)
				{
					A_1.Append("\t");
				}
			}
			A_1.Append("]");
			break;
		case global::g.a.f:
			if (this.m)
			{
				A_1.Append("true");
			}
			else
			{
				A_1.Append("false");
			}
			break;
		case global::g.a.a:
			A_1.Append("null");
			break;
		}
	}

	public global::g e(int A_0)
	{
		if (this.m_g.Count > A_0)
		{
			return this.m_g[A_0];
		}
		return null;
	}

	public void a(int A_0, global::g A_1)
	{
		if (this.m_g.Count > A_0)
		{
			this.m_g[A_0] = A_1;
		}
	}

	public global::g o(string A_0)
	{
		return n(A_0);
	}

	public void e(string A_0, global::g A_1)
	{
		a(A_0, A_1);
	}

	public override string ToString()
	{
		return g(A_0: true);
	}

	private string a(bool A_0)
	{
		return g(A_0);
	}

	private Dictionary<string, string> a()
	{
		if (this.m_f == global::g.a.d)
		{
			Dictionary<string, string> dictionary = new Dictionary<string, string>();
			for (int i = 0; i < this.m_g.Count; i++)
			{
				global::g g = this.m_g[i];
				switch (g.m_f)
				{
				case global::g.a.b:
					dictionary.Add(h[i], g.i);
					break;
				case global::g.a.c:
					dictionary.Add(h[i], string.Concat(g.j));
					break;
				case global::g.a.f:
					dictionary.Add(h[i], g.m.ToString() ?? "");
					break;
				}
			}
			return dictionary;
		}
		return null;
	}

	public static bool a(global::g A_0)
	{
		return A_0 != null;
	}

	static g()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		global::g.m_e = new char[6]
		{
			' ',
			'\r',
			'\n',
			'\t',
			'\ufeff',
			'\t'
		};
		global::g.m_o = new Stopwatch();
	}
}
