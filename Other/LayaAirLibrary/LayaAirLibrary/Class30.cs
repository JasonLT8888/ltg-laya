using System;
using System.IO;
using System.Text;


// Token: 0x02000038 RID: 56
class Class30
{
	// Token: 0x060001A9 RID: 425 RVA: 0x0000E3D4 File Offset: 0x0000C5D4
	public static FileStream smethod_0(string string_0, Class19 class19_0 = null)
	{
		string directoryName = Path.GetDirectoryName(string_0);
		if (!Directory.Exists(directoryName))
		{
			Directory.CreateDirectory(directoryName);
		}
		FileStream fileStream = new FileStream(string_0, FileMode.Create, FileAccess.Write);
		if (class19_0 == null)
		{
			return fileStream;
		}
		StreamWriter streamWriter = new StreamWriter(fileStream);
		string value = class19_0.method_51(true);
		streamWriter.Write(value);
		streamWriter.Close();
		return fileStream;
	}

	// Token: 0x060001AA RID: 426 RVA: 0x0000E420 File Offset: 0x0000C620
	public static string smethod_1(string string_0, string string_1)
	{
		string text = "";
		string[] array = string_0.Split(new char[]
		{
			'/'
		});
		string[] array2 = string_1.Split(new char[]
		{
			'/'
		});
		int num = 0;
		int num2 = 0;
		while (num2 < array.Length - 1 && !(array[num2] != array2[num2]))
		{
			num++;
			num2++;
		}
		for (int i = 0; i < array.Length - num - 1; i++)
		{
			text += "../";
		}
		for (int j = num; j < array2.Length; j++)
		{
			text += array2[j];
			if (j < array2.Length - 1)
			{
				text += "/";
			}
		}
		return text;
	}

	// Token: 0x060001AB RID: 427 RVA: 0x0000E4D8 File Offset: 0x0000C6D8
	public static void smethod_2(FileStream fileStream_0, params int[] int_0)
	{
		for (int i = 0; i < int_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(int_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	// Token: 0x060001AC RID: 428 RVA: 0x0000E50C File Offset: 0x0000C70C
	static void smethod_3(FileStream fileStream_0, params long[] long_0)
	{
		for (int i = 0; i < long_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(long_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	// Token: 0x060001AD RID: 429 RVA: 0x0000E540 File Offset: 0x0000C740
	public static void smethod_4(FileStream fileStream_0, params byte[] byte_0)
	{
		foreach (byte value in byte_0)
		{
			fileStream_0.WriteByte(value);
		}
	}

	// Token: 0x060001AE RID: 430 RVA: 0x0000E568 File Offset: 0x0000C768
	public static void smethod_5(FileStream fileStream_0, params ushort[] ushort_0)
	{
		for (int i = 0; i < ushort_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(ushort_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	// Token: 0x060001AF RID: 431 RVA: 0x0000E59C File Offset: 0x0000C79C
	public static void smethod_6(FileStream fileStream_0, params short[] short_0)
	{
		for (int i = 0; i < short_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(short_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	// Token: 0x060001B0 RID: 432 RVA: 0x0000E5D0 File Offset: 0x0000C7D0
	public static void smethod_7(FileStream fileStream_0, params uint[] uint_0)
	{
		for (int i = 0; i < uint_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(uint_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	// Token: 0x060001B1 RID: 433 RVA: 0x0000E604 File Offset: 0x0000C804
	static void smethod_8(FileStream fileStream_0, params sbyte[] sbyte_0)
	{
		BinaryWriter binaryWriter = new BinaryWriter(fileStream_0);
		foreach (sbyte value in sbyte_0)
		{
			binaryWriter.Write(value);
		}
	}

	// Token: 0x060001B2 RID: 434 RVA: 0x0000E634 File Offset: 0x0000C834
	public static void smethod_9(FileStream fileStream_0, params float[] float_0)
	{
		for (int i = 0; i < float_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(float_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	// Token: 0x060001B3 RID: 435 RVA: 0x0000E668 File Offset: 0x0000C868
	static void smethod_10(FileStream fileStream_0, params double[] double_0)
	{
		for (int i = 0; i < double_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(double_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	// Token: 0x060001B4 RID: 436 RVA: 0x0000E69C File Offset: 0x0000C89C
	public static void smethod_11(FileStream fileStream_0, params bool[] bool_0)
	{
		for (int i = 0; i < bool_0.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(bool_0[i]);
			fileStream_0.Write(bytes, 0, bytes.Length);
		}
	}

	// Token: 0x060001B5 RID: 437 RVA: 0x0000E6D0 File Offset: 0x0000C8D0
	public static void smethod_12(FileStream fileStream_0, string string_0)
	{
		byte[] bytes = Encoding.UTF8.GetBytes(string_0);
		short num = (short)bytes.Length;
		Class30.smethod_6(fileStream_0, new short[]
		{
			num
		});
		fileStream_0.Write(bytes, 0, bytes.Length);
	}

	// Token: 0x060001B6 RID: 438 RVA: 0x000023C6 File Offset: 0x000005C6
	public Class30()
	{
		
		
	}
}
