using mVjiDBJbRPt2wl7USA;
using System;
using System.IO;
using System.Text;

internal class n
{
	public static FileStream a(string A_0, g A_1 = null)
	{
		string directoryName = Path.GetDirectoryName(A_0);
		if (!Directory.Exists(directoryName))
		{
			Directory.CreateDirectory(directoryName);
		}
		FileStream fileStream = new FileStream(A_0, FileMode.Create, FileAccess.Write);
		if (A_1 == null)
		{
			return fileStream;
		}
		StreamWriter streamWriter = new StreamWriter(fileStream);
		string value = A_1.g();
		streamWriter.Write(value);
		streamWriter.Close();
		return fileStream;
	}

	public static string a(string A_0, string A_1)
	{
		string text = "";
		string[] array = A_0.Split('/');
		string[] array2 = A_1.Split('/');
		int num = 0;
		for (int i = 0; i < array.Length - 1 && !(array[i] != array2[i]); i++)
		{
			num++;
		}
		for (int j = 0; j < array.Length - num - 1; j++)
		{
			text += "../";
		}
		for (int k = num; k < array2.Length; k++)
		{
			text += array2[k];
			if (k < array2.Length - 1)
			{
				text += "/";
			}
		}
		return text;
	}

	public static void a(FileStream A_0, params int[] A_1)
	{
		for (int i = 0; i < A_1.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(A_1[i]);
			A_0.Write(bytes, 0, bytes.Length);
		}
	}

	private static void a(FileStream A_0, params long[] A_1)
	{
		for (int i = 0; i < A_1.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(A_1[i]);
			A_0.Write(bytes, 0, bytes.Length);
		}
	}

	public static void a(FileStream A_0, params byte[] A_1)
	{
		foreach (byte value in A_1)
		{
			A_0.WriteByte(value);
		}
	}

	public static void a(FileStream A_0, params ushort[] A_1)
	{
		for (int i = 0; i < A_1.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(A_1[i]);
			A_0.Write(bytes, 0, bytes.Length);
		}
	}

	public static void a(FileStream A_0, params short[] A_1)
	{
		for (int i = 0; i < A_1.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(A_1[i]);
			A_0.Write(bytes, 0, bytes.Length);
		}
	}

	public static void a(FileStream A_0, params uint[] A_1)
	{
		for (int i = 0; i < A_1.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(A_1[i]);
			A_0.Write(bytes, 0, bytes.Length);
		}
	}

	private static void a(FileStream A_0, params sbyte[] A_1)
	{
		BinaryWriter binaryWriter = new BinaryWriter(A_0);
		foreach (sbyte value in A_1)
		{
			binaryWriter.Write(value);
		}
	}

	public static void a(FileStream A_0, params float[] A_1)
	{
		for (int i = 0; i < A_1.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(A_1[i]);
			A_0.Write(bytes, 0, bytes.Length);
		}
	}

	private static void a(FileStream A_0, params double[] A_1)
	{
		for (int i = 0; i < A_1.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(A_1[i]);
			A_0.Write(bytes, 0, bytes.Length);
		}
	}

	public static void a(FileStream A_0, params bool[] A_1)
	{
		for (int i = 0; i < A_1.Length; i++)
		{
			byte[] bytes = BitConverter.GetBytes(A_1[i]);
			A_0.Write(bytes, 0, bytes.Length);
		}
	}

	public static void a(FileStream A_0, string A_1)
	{
		byte[] bytes = Encoding.UTF8.GetBytes(A_1);
		short num = (short)bytes.Length;
		a(A_0, num);
		A_0.Write(bytes, 0, bytes.Length);
	}

	public n()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
	}
}
