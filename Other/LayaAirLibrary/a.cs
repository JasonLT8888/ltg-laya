using mVjiDBJbRPt2wl7USA;
using System;
using System.Collections;
using System.Collections.Generic;

internal class a
{
	public static int a;

	public static string b;

	public static int c;

	public static bool d;

	public static bool e;

	public static bool f;

	public static string g;

	public static string h;

	private static string m_i;

	public static string j;

	public static byte[] k;

	public static string l;

	public static string m;

	public static string n;

	public static string o;

	private static global::g p;

	public static string q;

	public static string r;

	public static bool s;

	public static Dictionary<string, string> t;

	public static int u;

	private byte[] v;

	private byte[] w;

	private static string x;

	public static string y;

	public void a(string A_0, string A_1, bool A_2 = false)
	{
		o = "";
		t.Clear();
		t.Add("identifier", A_0);
		t.Add("password", A_1);
		if (A_0 == "" || A_1 == "")
		{
			u = 3;
			return;
		}
		if (A_0[0] == '1')
		{
			t.Add("idtype", "3");
		}
		else
		{
			t.Add("idtype", "1");
		}
		global::m.e(a("http://api.masteropen.layabox.com/layapassport/login", t, A_2), this);
	}

	public void b(string A_0)
	{
		global::m.e(a("https://api.nodedevelopers.layabox.com/pvr/exchange", global::a.k, global::a.m, n, A_0), this);
	}

	private IEnumerator a(string A_0, Dictionary<string, string> A_1, bool A_2)
	{
		return new a(0)
		{
			d = this,
			c = A_1,
			e = A_2
		};
	}

	private IEnumerator b(global::g A_0, bool A_1)
	{
		return new b(0)
		{
			d = this,
			c = A_0,
			e = A_1
		};
	}

	private IEnumerator a(global::g A_0, bool A_1)
	{
		return new c(0)
		{
			d = this,
			c = A_0,
			e = A_1
		};
	}

	private IEnumerator a(string A_0, byte[] A_1, string A_2, string A_3, string A_4)
	{
		return new d(0)
		{
			g = this,
			f = A_0,
			e = A_1,
			c = A_2,
			d = A_3,
			h = A_4
		};
	}

	public void b(string A_0, int A_1)
	{
		global::m.e(a(A_0, A_1), this);
	}

	private IEnumerator a(string A_0, int A_1)
	{
		return new e(0)
		{
			d = this,
			e = A_0,
			c = A_1
		};
	}

	public void g()
	{
		global::m.b(this);
	}

	private IEnumerator a(string A_0, string A_1, string A_2)
	{
		return new f(0)
		{
			f = this,
			c = A_0,
			d = A_1,
			e = A_2
		};
	}

	public void h()
	{
		global::m.e(f(), this);
	}

	private IEnumerator f()
	{
		return new g(0);
	}

	public void i()
	{
		global::m.e(b(1), this);
		global::m.e(b(2), this);
		global::m.e(b(3), this);
	}

	private IEnumerator b(int A_0)
	{
		return new h(0)
		{
			c = A_0
		};
	}

	private void e()
	{
		global::m.e(d(), this);
	}

	private IEnumerator d()
	{
		return new i(0);
	}

	public void c(int A_0)
	{
		global::m.e(a(A_0), this);
	}

	private IEnumerator a(int A_0)
	{
		return new j(0)
		{
			c = A_0
		};
	}

	private static string a(string A_0)
	{
		DateTime dateTime = TimeZoneInfo.ConvertTimeToUtc(new DateTime(1970, 1, 1));
		long ticks = long.Parse(A_0 + "0000000");
		TimeSpan value = new TimeSpan(ticks);
		string[] array = dateTime.Add(value).ToShortDateString().ToString()
			.Split('/');
		return array[2] + "/" + array[0] + "/" + array[1] + " ";
	}

	public static long a(bool A_0 = true)
	{
		TimeSpan timeSpan = DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0, 0);
		if (A_0)
		{
			return Convert.ToInt64(timeSpan.TotalSeconds);
		}
		return Convert.ToInt64(timeSpan.TotalMilliseconds);
	}

	public void j()
	{
		global::m.e(c(), this);
	}

	private IEnumerator c()
	{
		return new k(0);
	}

	public void k()
	{
		global::m.e(b(), this);
	}

	private IEnumerator b()
	{
		return new l(0);
	}

	public void l()
	{
		global::m.e(a(), this);
	}

	private IEnumerator a()
	{
		return new m(0);
	}

	public a()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
	}

	static a()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		global::a.a = 0;
		global::a.d = false;
		global::a.e = false;
		global::a.f = false;
		global::a.m_i = "";
		global::a.j = "";
		o = "";
		q = "";
		r = "0";
		s = false;
		t = new Dictionary<string, string>();
		u = 0;
	}
}
