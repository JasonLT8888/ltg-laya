using mVjiDBJbRPt2wl7USA;
using System.IO;

internal class f
{
	private static MemoryStream m_a;

	private static BinaryReader b;

	private static BinaryWriter c;

	private static uint[] d;

	private static uint[] e;

	private static uint[] m_f;

	private static uint[] g;

	private static uint[] h;

	static f()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		global::f.m_a = new MemoryStream(4);
		b = new BinaryReader(global::f.m_a);
		c = new BinaryWriter(global::f.m_a);
		d = new uint[512];
		e = new uint[512];
		m_f = new uint[2048];
		g = new uint[64];
		h = new uint[64];
		for (int i = 0; i < 256; i++)
		{
			int num = i - 127;
			if (num < -27)
			{
				d[i | 0] = 0u;
				d[i | 0x100] = 32768u;
				e[i | 0] = 24u;
				e[i | 0x100] = 24u;
			}
			else if (num < -14)
			{
				d[i | 0] = (uint)(1024 >> -num - 14);
				d[i | 0x100] = (uint)((1024 >> -num - 14) | 0x8000);
				e[i | 0] = (uint)(-num - 1);
				e[i | 0x100] = (uint)(-num - 1);
			}
			else if (num <= 15)
			{
				d[i | 0] = (uint)(num + 15 << 10);
				d[i | 0x100] = (uint)((num + 15 << 10) | 0x8000);
				e[i | 0] = 13u;
				e[i | 0x100] = 13u;
			}
			else if (num < 128)
			{
				d[i | 0] = 31744u;
				d[i | 0x100] = 64512u;
				e[i | 0] = 24u;
				e[i | 0x100] = 24u;
			}
			else
			{
				d[i | 0] = 31744u;
				d[i | 0x100] = 64512u;
				e[i | 0] = 13u;
				e[i | 0x100] = 13u;
			}
		}
		m_f[0] = 0u;
		for (int j = 1; j < 1024; j++)
		{
			int num2 = j << 13;
			int num3 = 0;
			while ((num2 & 0x800000) == 0)
			{
				num3 -= 8388608;
				num2 <<= 1;
			}
			num2 &= -8388609;
			num3 += 947912704;
			m_f[j] = (uint)(num2 | num3);
		}
		for (int k = 1024; k < 2048; k++)
		{
			m_f[k] = (uint)(939524096 + (k - 1024 << 13));
		}
		g[0] = 0u;
		for (int l = 1; l < 31; l++)
		{
			g[l] = (uint)(l << 23);
		}
		g[31] = 1199570944u;
		g[32] = 2147483648u;
		for (int m = 33; m < 63; m++)
		{
			g[m] = (uint)(2147483648u + (m - 32 << 23));
		}
		g[63] = 3347054592u;
		h[0] = 0u;
		for (int n = 1; n < 64; n++)
		{
			if (n == 32)
			{
				h[n] = 0u;
			}
			else
			{
				h[n] = 1024u;
			}
		}
	}

	public static ushort a(float A_0)
	{
		global::f.m_a.Position = 0L;
		c.Write(A_0);
		global::f.m_a.Position = 0L;
		uint num = b.ReadUInt32();
		uint num2 = (num >> 23) & 0x1FF;
		return (ushort)(d[num2] + ((num & 0x7FFFFF) >> (int)e[num2]));
	}

	private static float a(uint A_0)
	{
		uint num = A_0 >> 10;
		global::f.m_a.Position = 0L;
		c.Write(m_f[h[num] + (A_0 & 0x3FF)] + g[num]);
		global::f.m_a.Position = 0L;
		return b.ReadSingle();
	}

	public f()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
	}
}
