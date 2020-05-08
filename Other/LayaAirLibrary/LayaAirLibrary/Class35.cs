using System;
using System.Diagnostics;
using System.Text;

using UnityEngine;

// Token: 0x02000043 RID: 67
class Class35
{
	// Token: 0x0600020F RID: 527 RVA: 0x00020874 File Offset: 0x0001EA74
	public static int smethod_0(string string_0, string string_1, bool bool_0)
	{
		if (bool_0)
		{
			string_1 += " -s";
		}
		string fileName = "";
		string text = "";
		if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.MacOSX)
		{
			fileName = "bash";
			text = "-c";
			text = text + " \"" + string_1 + " \"";
		}
		else if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.Windows)
		{
			fileName = "cmd.exe";
			text = "/c";
			text = text + " \"" + string_1 + " \"";
		}
		return Process.Start(new ProcessStartInfo(fileName)
		{
			CreateNoWindow = true,
			Arguments = text,
			ErrorDialog = true,
			UseShellExecute = false,
			WorkingDirectory = string_0
		}).Id;
	}

	// Token: 0x06000210 RID: 528 RVA: 0x00020920 File Offset: 0x0001EB20
	public static void smethod_1()
	{
		string str = Environment.ExpandEnvironmentVariables("%SystemRoot%");
		string text = str + "/system32";
		string text2 = str + "/System32/Wbem";
		string text3 = Environment.GetEnvironmentVariable("PATH");
		text3 = string.Concat(new string[]
		{
			text3,
			";",
			text,
			";",
			text2
		});
		Environment.SetEnvironmentVariable("PATH", text3);
	}

	// Token: 0x06000211 RID: 529 RVA: 0x0002098C File Offset: 0x0001EB8C
	public static string smethod_2(string string_0)
	{
		string result = "";
		string fileName = "";
		string text = "";
		if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.MacOSX)
		{
			fileName = "bash";
			text = "-c";
			text = text + " \"" + string_0 + " \"";
		}
		else if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.Windows)
		{
			fileName = "cmd.exe";
			text = "/c";
			text = text + " \"" + string_0 + " \"";
		}
		ProcessStartInfo processStartInfo = new ProcessStartInfo(fileName);
		processStartInfo.Arguments = text;
		processStartInfo.CreateNoWindow = true;
		processStartInfo.ErrorDialog = true;
		processStartInfo.UseShellExecute = false;
		processStartInfo.WorkingDirectory = "";
		if (processStartInfo.UseShellExecute)
		{
			processStartInfo.RedirectStandardOutput = false;
			processStartInfo.RedirectStandardError = false;
			processStartInfo.RedirectStandardInput = false;
		}
		else
		{
			processStartInfo.RedirectStandardOutput = true;
			processStartInfo.RedirectStandardError = true;
			processStartInfo.RedirectStandardInput = true;
			processStartInfo.StandardOutputEncoding = Encoding.UTF8;
			processStartInfo.StandardErrorEncoding = Encoding.UTF8;
		}
		try
		{
			Process process = Process.Start(processStartInfo);
			result = process.StandardOutput.ReadLine();
			return result;
		}
		catch (Exception message)
		{
			UnityEngine.Debug.Log(message);
		}
		return result;
	}

	// Token: 0x06000212 RID: 530 RVA: 0x000023C6 File Offset: 0x000005C6
	public Class35()
	{
		
		
	}
}
