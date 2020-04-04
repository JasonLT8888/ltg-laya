using mVjiDBJbRPt2wl7USA;
using System;
using System.Diagnostics;
using System.Text;
using UnityEngine;

internal class q
{
	public static int a(string A_0, string A_1, bool A_2)
	{
		//IL_001c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0022: Invalid comparison between Unknown and I4
		//IL_0044: Unknown result type (might be due to invalid IL or missing references)
		//IL_004a: Invalid comparison between Unknown and I4
		if (A_2)
		{
			A_1 += " -s";
		}
		string fileName = "";
		string arguments = "";
		if ((int)SystemInfo.get_operatingSystemFamily() == 1)
		{
			fileName = "bash";
			arguments = "-c";
			arguments = arguments + " \"" + A_1 + " \"";
		}
		else if ((int)SystemInfo.get_operatingSystemFamily() == 2)
		{
			fileName = "cmd.exe";
			arguments = "/c";
			arguments = arguments + " \"" + A_1 + " \"";
		}
		return Process.Start(new ProcessStartInfo(fileName)
		{
			CreateNoWindow = true,
			Arguments = arguments,
			ErrorDialog = true,
			UseShellExecute = false,
			WorkingDirectory = A_0
		}).Id;
	}

	public static void a()
	{
		string str = Environment.ExpandEnvironmentVariables("%SystemRoot%");
		string text = str + "/system32";
		string text2 = str + "/System32/Wbem";
		string environmentVariable = Environment.GetEnvironmentVariable("PATH");
		environmentVariable = environmentVariable + ";" + text + ";" + text2;
		Environment.SetEnvironmentVariable("PATH", environmentVariable);
	}

	public static string a(string A_0)
	{
		//IL_0012: Unknown result type (might be due to invalid IL or missing references)
		//IL_0018: Invalid comparison between Unknown and I4
		//IL_003a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0040: Invalid comparison between Unknown and I4
		string result = "";
		string fileName = "";
		string arguments = "";
		if ((int)SystemInfo.get_operatingSystemFamily() == 1)
		{
			fileName = "bash";
			arguments = "-c";
			arguments = arguments + " \"" + A_0 + " \"";
		}
		else if ((int)SystemInfo.get_operatingSystemFamily() == 2)
		{
			fileName = "cmd.exe";
			arguments = "/c";
			arguments = arguments + " \"" + A_0 + " \"";
		}
		ProcessStartInfo processStartInfo = new ProcessStartInfo(fileName);
		processStartInfo.Arguments = arguments;
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
		catch (Exception ex)
		{
			Debug.Log((object)ex);
			return result;
		}
	}

	public q()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
	}
}
