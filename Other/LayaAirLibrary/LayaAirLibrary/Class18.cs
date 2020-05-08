using System;
using System.IO;


// Token: 0x0200001D RID: 29
class Class18
{
	// Token: 0x060000BF RID: 191 RVA: 0x0000B500 File Offset: 0x00009700
	static Class18()
	{
		
		Class18.memoryStream_0 = new MemoryStream(4);
		Class18.binaryReader_0 = new BinaryReader(Class18.memoryStream_0);
		Class18.binaryWriter_0 = new BinaryWriter(Class18.memoryStream_0);
		Class18.uint_0 = new uint[512];
		Class18.uint_1 = new uint[512];
		Class18.uint_2 = new uint[2048];
		Class18.uint_3 = new uint[64];
		Class18.uint_4 = new uint[64];
		for (int i = 0; i < 256; i++)
		{
			int num = i - 127;
			if (num < -27)
			{
				Class18.uint_0[i | 0] = 0U;
				Class18.uint_0[i | 256] = 32768U;
				Class18.uint_1[i | 0] = 24U;
				Class18.uint_1[i | 256] = 24U;
			}
			else if (num < -14)
			{
				Class18.uint_0[i | 0] = (uint)(1024 >> -num - 14);
				Class18.uint_0[i | 256] = (uint)(1024 >> -num - 14 | 32768);
				Class18.uint_1[i | 0] = (uint)(-num - 1);
				Class18.uint_1[i | 256] = (uint)(-num - 1);
			}
			else if (num <= 15)
			{
				Class18.uint_0[i | 0] = (uint)((uint)(num + 15) << 10);
				Class18.uint_0[i | 256] = (uint)(num + 15 << 10 | 32768);
				Class18.uint_1[i | 0] = 13U;
				Class18.uint_1[i | 256] = 13U;
			}
			else if (num < 128)
			{
				Class18.uint_0[i | 0] = 31744U;
				Class18.uint_0[i | 256] = 64512U;
				Class18.uint_1[i | 0] = 24U;
				Class18.uint_1[i | 256] = 24U;
			}
			else
			{
				Class18.uint_0[i | 0] = 31744U;
				Class18.uint_0[i | 256] = 64512U;
				Class18.uint_1[i | 0] = 13U;
				Class18.uint_1[i | 256] = 13U;
			}
		}
		Class18.uint_2[0] = 0U;
		for (int j = 1; j < 1024; j++)
		{
			int num2 = j << 13;
			int num3 = 0;
			while ((num2 & 8388608) == 0)
			{
				num3 -= 8388608;
				num2 <<= 1;
			}
			num2 &= -8388609;
			num3 += 947912704;
			Class18.uint_2[j] = (uint)(num2 | num3);
		}
		for (int k = 1024; k < 2048; k++)
		{
			Class18.uint_2[k] = (uint)(939524096 + (k - 1024 << 13));
		}
		Class18.uint_3[0] = 0U;
		for (int l = 1; l < 31; l++)
		{
			Class18.uint_3[l] = (uint)((uint)l << 23);
		}
		Class18.uint_3[31] = 1199570944U;
		Class18.uint_3[32] = 2147483648U;
		for (int m = 33; m < 63; m++)
		{
			Class18.uint_3[m] = (uint)(2147483648L + (long)((long)(m - 32) << 23));
		}
		Class18.uint_3[63] = 3347054592U;
		Class18.uint_4[0] = 0U;
		for (int n = 1; n < 64; n++)
		{
			if (n == 32)
			{
				Class18.uint_4[n] = 0U;
			}
			else
			{
				Class18.uint_4[n] = 1024U;
			}
		}
	}

	// Token: 0x060000C0 RID: 192 RVA: 0x0000B840 File Offset: 0x00009A40
	public static ushort smethod_0(float float_0)
	{
		Class18.memoryStream_0.Position = 0L;
		Class18.binaryWriter_0.Write(float_0);
		Class18.memoryStream_0.Position = 0L;
		uint num = Class18.binaryReader_0.ReadUInt32();
		uint num2 = num >> 23 & 511U;
		return (ushort)(Class18.uint_0[(int)num2] + ((num & 8388607U) >> (int)Class18.uint_1[(int)num2]));
	}

	// Token: 0x060000C1 RID: 193 RVA: 0x0000B8B0 File Offset: 0x00009AB0
	static float smethod_1(uint uint_5)
	{
		uint num = uint_5 >> 10;
		Class18.memoryStream_0.Position = 0L;
		Class18.binaryWriter_0.Write(Class18.uint_2[(int)(Class18.uint_4[(int)num] + (uint_5 & 1023U))] + Class18.uint_3[(int)num]);
		Class18.memoryStream_0.Position = 0L;
		return Class18.binaryReader_0.ReadSingle();
	}

	// Token: 0x060000C2 RID: 194 RVA: 0x000023C6 File Offset: 0x000005C6
	public Class18()
	{
		
		
	}

	// Token: 0x0400014D RID: 333
	static MemoryStream memoryStream_0;

	// Token: 0x0400014E RID: 334
	static BinaryReader binaryReader_0;

	// Token: 0x0400014F RID: 335
	static BinaryWriter binaryWriter_0;

	// Token: 0x04000150 RID: 336
	static uint[] uint_0;

	// Token: 0x04000151 RID: 337
	static uint[] uint_1;

	// Token: 0x04000152 RID: 338
	static uint[] uint_2;

	// Token: 0x04000153 RID: 339
	static uint[] uint_3;

	// Token: 0x04000154 RID: 340
	static uint[] uint_4;
}
