using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Runtime.CompilerServices;

using UnityEngine;
using UnityEngine.Networking;

// Token: 0x02000003 RID: 3
class Class0
{
	// Token: 0x02000004 RID: 4
	[CompilerGenerated]
	sealed class Class1 : IEnumerator<object>, IEnumerator, IDisposable
	{
		// Token: 0x0600001D RID: 29 RVA: 0x000023D3 File Offset: 0x000005D3
		[DebuggerHidden]
		public Class1(int int_1)
		{
			this.int_0 = int_1;
		}

		// Token: 0x0600001E RID: 30 RVA: 0x000023E7 File Offset: 0x000005E7
		[DebuggerHidden]
		void IDisposable.Dispose()
		{
		}

		// Token: 0x0600001F RID: 31 RVA: 0x00003434 File Offset: 0x00001634
		bool IEnumerator.MoveNext()
		{
			int num = this.int_0;
			Class0 @class = this.class0_0;
			if (num == 0)
			{
				this.int_0 = -1;
				string uri = string.Concat(new string[]
				{
					"http://api.masteropen.layabox.com/layapassport/login?identifier=",
					this.dictionary_0["identifier"].ToString(),
					"&password=",
					this.dictionary_0["password"].ToString(),
					"&idtype=",
					this.dictionary_0["idtype"].ToString()
				});
                UnityEngine.Debug.LogError(uri);
                this.unityWebRequest_0 = UnityWebRequest.Get(uri);
				this.object_0 = this.unityWebRequest_0.SendWebRequest();
				this.int_0 = 1;
				return true;
			}
			if (num != 1)
			{
				return false;
			}
			this.int_0 = -1;
			if (this.unityWebRequest_0.error != null)
			{
				if (this.unityWebRequest_0.error.ToString() == "Cannot resolve destination host")
				{
					Class0.int_2 = 4;
				}
				else
				{
					Class0.int_2 = 5;
					UnityEngine.Debug.Log("error is :" + this.unityWebRequest_0.error);
				}
			}
			else
			{
				Class19 class2 = Class19.smethod_12(this.unityWebRequest_0.downloadHandler.text, -2, false, false);
				if (class2 == null)
				{
					Class0.int_2 = 1;
				}
				if (this.unityWebRequest_0.downloadHandler.text != "" && class2.method_57("ret").ToString() == "0")
				{
					Class0.string_1 = class2.method_57("data").method_57("mobile").string_0;
					UnityEngine.Debug.Log(Class0.string_1);
					Class28.smethod_0(@class.method_3(class2, this.bool_0), @class);
				}
				else
				{
					Class0.int_2 = 1;
				}
			}
			return false;
		}

		// Token: 0x17000001 RID: 1
		// (get) Token: 0x06000020 RID: 32 RVA: 0x000023E9 File Offset: 0x000005E9
		object IEnumerator<object>.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x06000021 RID: 33 RVA: 0x000023F1 File Offset: 0x000005F1
		[DebuggerHidden]
		void IEnumerator.Reset()
		{
			throw new NotSupportedException();
		}

		// Token: 0x17000002 RID: 2
		// (get) Token: 0x06000022 RID: 34 RVA: 0x000023E9 File Offset: 0x000005E9
		object IEnumerator.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x0400001A RID: 26
		int int_0;

		// Token: 0x0400001B RID: 27
		object object_0;

		// Token: 0x0400001C RID: 28
		public Dictionary<string, string> dictionary_0;

		// Token: 0x0400001D RID: 29
		public Class0 class0_0;

		// Token: 0x0400001E RID: 30
		public bool bool_0;

		// Token: 0x0400001F RID: 31
		UnityWebRequest unityWebRequest_0;
	}

	// Token: 0x02000005 RID: 5
	[CompilerGenerated]
	sealed class Class2 : IEnumerator<object>, IEnumerator, IDisposable
	{
		// Token: 0x06000023 RID: 35 RVA: 0x000023F8 File Offset: 0x000005F8
		[DebuggerHidden]
		public Class2(int int_1)
		{
			
			
			this.int_0 = int_1;
		}

		// Token: 0x06000024 RID: 36 RVA: 0x000023E7 File Offset: 0x000005E7
		[DebuggerHidden]
		void IDisposable.Dispose()
		{
		}

		// Token: 0x06000025 RID: 37 RVA: 0x000035F8 File Offset: 0x000017F8
		bool IEnumerator.MoveNext()
		{
			int num = this.int_0;
			Class0 @class = this.class0_0;
			if (num == 0)
			{
				this.int_0 = -1;
				string uri = "http://api.masteropen.layabox.com/sso?access_token=" + this.class19_0.method_57("data").method_57("token").string_0;
				this.unityWebRequest_0 = UnityWebRequest.Get(uri);
				this.object_0 = this.unityWebRequest_0.SendWebRequest();
				this.int_0 = 1;
				return true;
			}
			if (num != 1)
			{
				return false;
			}
			this.int_0 = -1;
			if (this.unityWebRequest_0.error != null)
			{
				if (this.unityWebRequest_0.error.ToString() == "Cannot resolve destination host")
				{
					UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请检查网络");
					Class0.int_2 = 5;
				}
				else
				{
					Class0.int_2 = 5;
					UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请重新登陆");
					@class.method_0(LoginWindow.string_0, LoginWindow.string_1, false);
				}
			}
			else
			{
				Class19 class2 = Class19.smethod_12(this.unityWebRequest_0.downloadHandler.text.Replace("\\", "").Replace(":\"{", ":{").Replace("}\"}", "}}"), 3, false, false);
				if (class2.method_43("ret") != null)
				{
					if (class2.method_57("ret").method_2() != 0f)
					{
						Class0.int_2 = 5;
						UnityEngine.Debug.LogError("Login Fail");
					}
					Class0.string_9 = class2.method_57("data").method_57("userInfo").method_57("token").string_0;
					Class28.smethod_0(@class.method_4(class2, this.bool_0), @class);
				}
			}
			return false;
		}

		// Token: 0x17000003 RID: 3
		// (get) Token: 0x06000026 RID: 38 RVA: 0x0000240C File Offset: 0x0000060C
		object IEnumerator<object>.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x06000027 RID: 39 RVA: 0x000023F1 File Offset: 0x000005F1
		[DebuggerHidden]
		void IEnumerator.Reset()
		{
			throw new NotSupportedException();
		}

		// Token: 0x17000004 RID: 4
		// (get) Token: 0x06000028 RID: 40 RVA: 0x0000240C File Offset: 0x0000060C
		object IEnumerator.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x04000020 RID: 32
		int int_0;

		// Token: 0x04000021 RID: 33
		object object_0;

		// Token: 0x04000022 RID: 34
		public Class19 class19_0;

		// Token: 0x04000023 RID: 35
		public Class0 class0_0;

		// Token: 0x04000024 RID: 36
		public bool bool_0;

		// Token: 0x04000025 RID: 37
		UnityWebRequest unityWebRequest_0;
	}

	// Token: 0x02000006 RID: 6
	[CompilerGenerated]
	sealed class Class3 : IEnumerator<object>, IEnumerator, IDisposable
	{
		// Token: 0x06000029 RID: 41 RVA: 0x00002414 File Offset: 0x00000614
		[DebuggerHidden]
		public Class3(int int_1)
		{
			
			
			this.int_0 = int_1;
		}

		// Token: 0x0600002A RID: 42 RVA: 0x000023E7 File Offset: 0x000005E7
		[DebuggerHidden]
		void IDisposable.Dispose()
		{
		}

		// Token: 0x0600002B RID: 43 RVA: 0x0000379C File Offset: 0x0000199C
		bool IEnumerator.MoveNext()
		{
			int num = this.int_0;
			Class0 @class = this.class0_0;
			if (num == 0)
			{
				this.int_0 = -1;
				string string_ = this.class19_0.method_57("data").method_57("userInfo").method_57("userId").string_0;
				string string_2 = this.class19_0.method_57("data").method_57("userInfo").method_57("channelExt").method_57("mobile").string_0;
				string string_3 = this.class19_0.method_57("data").method_57("userInfo").method_57("channelExt").method_57("email").string_0;
				string text;
				if (this.class19_0.method_57("data").method_57("userInfo").method_57("channelExt").method_57("mobile").string_0 == null)
				{
					if (this.class19_0.method_57("data").method_57("userInfo").method_57("channelExt").method_57("mobile").string_0 == null)
					{
						text = string_;
					}
					else
					{
						text = this.class19_0.method_57("data").method_57("userInfo").method_57("channelExt").method_57("mobile").string_0;
					}
				}
				else
				{
					text = this.class19_0.method_57("data").method_57("userInfo").method_57("channelExt").method_57("mobile").string_0;
				}
				if (this.class19_0.method_57("data").method_57("userInfo").method_57("channelExt").method_1() == 11)
				{
					Class0.string_1 = text;
				}
				else if (this.class19_0.method_57("data").method_57("userInfo").method_57("channelExt").method_57("username").string_0 != "")
				{
					Class0.string_1 = this.class19_0.method_57("data").method_57("userInfo").method_57("channelExt").method_57("username").string_0;
				}
				UnityEngine.Debug.Log(Class0.string_1);
				string text2 = "";
				string computerUUID = LoginWindow.ComputerUUID;
				string uri = string.Concat(new object[]
				{
					"http://developers.masteropen.layabox.com/auth/reg_uuid_login?userId=",
					string_,
					"&username=",
					text,
					"&mobile=",
					string_2,
					"&email=",
					string_3,
					"&avatarUrl=",
					text2,
					"&uuid=",
					computerUUID,
					"&os=",
					SystemInfo.operatingSystemFamily,
					" ",
					SystemInfo.deviceName
				});
				this.unityWebRequest_0 = UnityWebRequest.Get(uri);
				this.object_0 = this.unityWebRequest_0.SendWebRequest();
				this.int_0 = 1;
				return true;
			}
			if (num != 1)
			{
				return false;
			}
			this.int_0 = -1;
			if (this.unityWebRequest_0.error != null)
			{
				if (this.unityWebRequest_0.error.ToString() == "Cannot resolve destination host")
				{
					Class0.int_2 = 5;
					UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请检查网络");
				}
				else
				{
					Class0.int_2 = 5;
					UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请重新登陆");
					@class.method_0(LoginWindow.string_0, LoginWindow.string_1, false);
				}
			}
			else
			{
				Class19 class2 = Class19.smethod_12(this.unityWebRequest_0.downloadHandler.text, -2, false, false);
				if (class2.method_57("ret").method_2() != 0f)
				{
					Class0.int_2 = 5;
					UnityEngine.Debug.LogError("Login Fail");
				}
				if (class2.method_57("data").method_57("is_vip").ToString() == "1")
				{
					Class0.string_2 = "VIP";
					Class0.bool_0 = true;
					Class0.bool_1 = true;
					Class0.bool_2 = true;
				}
				else
				{
					Class0.string_2 = "Not  Open";
					Class0.bool_0 = false;
				}
				Class0.string_10 = class2.method_57("data").method_57("is_enterprise").ToString();
				if (this.bool_0 && !Class0.bool_1)
				{
					PaymentPage.smethod_0();
				}
				Class0.string_3 = class2.method_57("data").method_57("uid").float_0.ToString();
				Class0.string_4 = class2.method_57("data").method_57("token").string_0;
				Class0.bool_3 = class2.method_57("data").method_57("uuid").bool_1;
				if (class2.method_57("data").method_57("vip_end_at") != null)
				{
					Class0.string_8 = Class0.smethod_0(class2.method_57("data").method_57("vip_end_at").ToString()) + Class0.string_12;
				}
				if (!Class0.bool_3)
				{
					LoginWindow.int_0 = 2;
					LoginWindow.int_1 = 0;
				}
				else
				{
					LoginWindow.int_0 = 4;
					LoginWindow.int_1 = 0;
				}
				@class.method_14();
			}
			return false;
		}

		// Token: 0x17000005 RID: 5
		// (get) Token: 0x0600002C RID: 44 RVA: 0x00002428 File Offset: 0x00000628
		object IEnumerator<object>.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x0600002D RID: 45 RVA: 0x000023F1 File Offset: 0x000005F1
		[DebuggerHidden]
		void IEnumerator.Reset()
		{
			throw new NotSupportedException();
		}

		// Token: 0x17000006 RID: 6
		// (get) Token: 0x0600002E RID: 46 RVA: 0x00002428 File Offset: 0x00000628
		object IEnumerator.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x04000026 RID: 38
		int int_0;

		// Token: 0x04000027 RID: 39
		object object_0;

		// Token: 0x04000028 RID: 40
		public Class19 class19_0;

		// Token: 0x04000029 RID: 41
		public Class0 class0_0;

		// Token: 0x0400002A RID: 42
		public bool bool_0;

		// Token: 0x0400002B RID: 43
		UnityWebRequest unityWebRequest_0;
	}

	// Token: 0x02000007 RID: 7
	[CompilerGenerated]
	sealed class Class4 : IEnumerator<object>, IEnumerator, IDisposable
	{
		// Token: 0x0600002F RID: 47 RVA: 0x00002430 File Offset: 0x00000630
		[DebuggerHidden]
		public Class4(int int_1)
		{
			
			
			this.int_0 = int_1;
		}

		// Token: 0x06000030 RID: 48 RVA: 0x000023E7 File Offset: 0x000005E7
		[DebuggerHidden]
		void IDisposable.Dispose()
		{
		}

		// Token: 0x06000031 RID: 49 RVA: 0x00003CB8 File Offset: 0x00001EB8
		bool IEnumerator.MoveNext()
		{
			int num = this.int_0;
			Class0 @class = this.class0_0;
			if (num != 0)
			{
				if (num != 1)
				{
					return false;
				}
				this.int_0 = -1;
				Class0.int_0--;
				if (Class0.int_0 == 0)
				{
					UnityEngine.Debug.Log("LayaAir3D UnityPlugin: Exporting success");
				}
				if (this.unityWebRequest_0.error != null)
				{
					UnityEngine.Debug.Log("LayaAir3D UnityPlugin: error is :" + this.unityWebRequest_0.error);
				}
				else if (this.unityWebRequest_0.downloadHandler.text == "")
				{
					UnityEngine.Debug.Log("LayaAir3D UnityPlugin: Error to compress texture");
				}
				else
				{
					@class.byte_1 = this.unityWebRequest_0.downloadHandler.data;
					File.WriteAllBytes(this.string_3, @class.byte_1);
				}
				this.unityWebRequest_0 = null;
			}
			else
			{
				this.int_0 = -1;
				if (this.string_0 != "" || this.string_1 != "" || Class0.string_3 != "" || Class0.string_0 != "" || Class0.string_4 != "" || LoginWindow.ComputerUUID != "")
				{
					WWWForm wwwform = new WWWForm();
					wwwform.AddBinaryData("file", this.byte_0, this.string_0 + "." + Class0.string_5.Substring(Class0.string_5.Length - 3));
					wwwform.AddField("format", this.string_0);
					wwwform.AddField("extension", this.string_1);
					wwwform.AddField("developer_uid", Class0.string_3);
					wwwform.AddField("other", Class0.string_0);
					wwwform.AddField("token", Class0.string_4);
					wwwform.AddField("uuid", LoginWindow.ComputerUUID);
					this.unityWebRequest_0 = UnityWebRequest.Post(this.string_2, wwwform);
					this.object_0 = this.unityWebRequest_0.SendWebRequest();
					this.int_0 = 1;
					return true;
				}
			}
			return false;
		}

		// Token: 0x17000007 RID: 7
		// (get) Token: 0x06000032 RID: 50 RVA: 0x00002444 File Offset: 0x00000644
		object IEnumerator<object>.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x06000033 RID: 51 RVA: 0x000023F1 File Offset: 0x000005F1
		[DebuggerHidden]
		void IEnumerator.Reset()
		{
			throw new NotSupportedException();
		}

		// Token: 0x17000008 RID: 8
		// (get) Token: 0x06000034 RID: 52 RVA: 0x00002444 File Offset: 0x00000644
		object IEnumerator.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x0400002C RID: 44
		int int_0;

		// Token: 0x0400002D RID: 45
		object object_0;

		// Token: 0x0400002E RID: 46
		public string string_0;

		// Token: 0x0400002F RID: 47
		public string string_1;

		// Token: 0x04000030 RID: 48
		public byte[] byte_0;

		// Token: 0x04000031 RID: 49
		public string string_2;

		// Token: 0x04000032 RID: 50
		public Class0 class0_0;

		// Token: 0x04000033 RID: 51
		public string string_3;

		// Token: 0x04000034 RID: 52
		UnityWebRequest unityWebRequest_0;
	}

	// Token: 0x02000008 RID: 8
	[CompilerGenerated]
	sealed class Class5 : IEnumerator<object>, IEnumerator, IDisposable
	{
		// Token: 0x06000035 RID: 53 RVA: 0x0000244C File Offset: 0x0000064C
		[DebuggerHidden]
		public Class5(int int_2)
		{
			
			
			this.int_0 = int_2;
		}

		// Token: 0x06000036 RID: 54 RVA: 0x000023E7 File Offset: 0x000005E7
		[DebuggerHidden]
		void IDisposable.Dispose()
		{
		}

		// Token: 0x06000037 RID: 55 RVA: 0x00003EC0 File Offset: 0x000020C0
		bool IEnumerator.MoveNext()
		{
			int num = this.int_0;
			Class0 @class = this.class0_0;
			if (num != 0)
			{
				if (num != 1)
				{
					return false;
				}
				this.int_0 = -1;
				if (this.unityWebRequest_0.error != null)
				{
					if (this.unityWebRequest_0.error.ToString() == "Cannot resolve destination host")
					{
						UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请检查网络");
					}
					else
					{
						UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请重新登陆");
						@class.method_0(LoginWindow.string_0, LoginWindow.string_1, false);
					}
				}
				else
				{
					Class19 class2 = Class19.smethod_12(this.unityWebRequest_0.downloadHandler.text, -2, false, false);
					if (class2 == null)
					{
						UnityEngine.Debug.Log("LayaAir3D UnityPlugin : 获得失败");
					}
					else
					{
						if (class2.method_57("ret").method_2() != 0f)
						{
							Class0.int_2 = 5;
							UnityEngine.Debug.LogError("Login Fail");
						}
						if (class2.method_57("ret").method_2() == 0f)
						{
							if (this.int_1 == 3)
							{
								this.int_1 = 2;
							}
							Class28.smethod_0(@class.method_9(this.string_0, class2.method_57("data").method_57("list").method_55(this.int_1).method_57("product_price").ToString(), class2.method_57("data").method_57("list").method_55(this.int_1).method_57("product_id").ToString()), @class);
						}
						else
						{
							LoginWindow.int_0 = 4;
							Class25.smethod_0();
						}
					}
				}
				this.unityWebRequest_0 = null;
			}
			else
			{
				this.int_0 = -1;
				if (!(Class0.string_4 == ""))
				{
					int num2 = (this.int_1 == 3) ? 3 : 1;
					string uri = "http://developers.masteropen.layabox.com/products/getproductlist?access_token=" + Class0.string_4 + "&product_from=" + num2.ToString();
					this.unityWebRequest_0 = UnityWebRequest.Get(uri);
					this.object_0 = this.unityWebRequest_0.SendWebRequest();
					this.int_0 = 1;
					return true;
				}
				UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : Please re-login ");
			}
			return false;
		}

		// Token: 0x17000009 RID: 9
		// (get) Token: 0x06000038 RID: 56 RVA: 0x00002460 File Offset: 0x00000660
		object IEnumerator<object>.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x06000039 RID: 57 RVA: 0x000023F1 File Offset: 0x000005F1
		[DebuggerHidden]
		void IEnumerator.Reset()
		{
			throw new NotSupportedException();
		}

		// Token: 0x1700000A RID: 10
		// (get) Token: 0x0600003A RID: 58 RVA: 0x00002460 File Offset: 0x00000660
		object IEnumerator.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x04000035 RID: 53
		int int_0;

		// Token: 0x04000036 RID: 54
		object object_0;

		// Token: 0x04000037 RID: 55
		public int int_1;

		// Token: 0x04000038 RID: 56
		public Class0 class0_0;

		// Token: 0x04000039 RID: 57
		public string string_0;

		// Token: 0x0400003A RID: 58
		UnityWebRequest unityWebRequest_0;
	}

	// Token: 0x02000009 RID: 9
	[CompilerGenerated]
	sealed class Class6 : IEnumerator<object>, IEnumerator, IDisposable
	{
		// Token: 0x0600003B RID: 59 RVA: 0x00002468 File Offset: 0x00000668
		[DebuggerHidden]
		public Class6(int int_1)
		{
			
			
			this.int_0 = int_1;
		}

		// Token: 0x0600003C RID: 60 RVA: 0x000023E7 File Offset: 0x000005E7
		[DebuggerHidden]
		void IDisposable.Dispose()
		{
		}

		// Token: 0x0600003D RID: 61 RVA: 0x000040C4 File Offset: 0x000022C4
		bool IEnumerator.MoveNext()
		{
			int num = this.int_0;
			Class0 @class = this.class0_0;
			if (num != 0)
			{
				if (num != 1)
				{
					return false;
				}
				this.int_0 = -1;
				if (this.unityWebRequest_0.error != null)
				{
					if (this.unityWebRequest_0.error.ToString() == "Cannot resolve destination host")
					{
						UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请检查网络");
					}
					else
					{
						UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请重新登陆");
						@class.method_0(LoginWindow.string_0, LoginWindow.string_1, false);
					}
				}
				else
				{
					Class19 class2 = Class19.smethod_12(this.unityWebRequest_0.downloadHandler.text, -2, false, false);
					if (class2 == null)
					{
						UnityEngine.Debug.Log("LayaAir3D UnityPlugin : 获得失败");
					}
					else if (class2.method_57("ret").method_2() == 0f)
					{
						PaymentPage.string_0 = class2.method_57("data").method_57("code_src").ToString().Replace("\\/", "/").Replace("\"", "");
						PaymentPage.bool_1 = true;
						PaymentPage.smethod_2();
						PaymentPage.paymentPage_0.Repaint();
						Class0.string_11 = class2.method_57("data").method_57("order_id").ToString();
						Class0.string_11 = Class0.string_11.Replace("\"", "");
						PaymentPage.bool_3 = true;
					}
					else if (class2.method_57("ret").method_2() == 171f)
					{
						if (this.string_2 == "14")
						{
							PaymentPage.bool_1 = false;
							PaymentPage.texture2D_3 = PaymentPage.texture2D_17;
							PaymentPage.paymentPage_0.Repaint();
						}
						else
						{
							PaymentPage.bool_1 = false;
							PaymentPage.texture2D_3 = PaymentPage.texture2D_18;
							PaymentPage.paymentPage_0.Repaint();
						}
					}
				}
				this.unityWebRequest_0 = null;
			}
			else
			{
				this.int_0 = -1;
				if (!(Class0.string_4 == "") && !(Class0.string_3 == ""))
				{
					string uri = string.Concat(new string[]
					{
						"https://developers.masteropen.layabox.com/developers/unityrecharge?pay_type=",
						this.string_0,
						"&price=",
						this.string_1,
						"&access_token=",
						Class0.string_4,
						"&developer_uid=",
						Class0.string_3,
						"&product_id=",
						this.string_2
					});
					this.unityWebRequest_0 = UnityWebRequest.Get(uri);
					this.object_0 = this.unityWebRequest_0.SendWebRequest();
					this.int_0 = 1;
					return true;
				}
				UnityEngine.Debug.Log("LayaAir3D UnityPlugin : Please re-login ");
			}
			return false;
		}

		// Token: 0x1700000B RID: 11
		// (get) Token: 0x0600003E RID: 62 RVA: 0x0000247C File Offset: 0x0000067C
		object IEnumerator<object>.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x0600003F RID: 63 RVA: 0x000023F1 File Offset: 0x000005F1
		[DebuggerHidden]
		void IEnumerator.Reset()
		{
			throw new NotSupportedException();
		}

		// Token: 0x1700000C RID: 12
		// (get) Token: 0x06000040 RID: 64 RVA: 0x0000247C File Offset: 0x0000067C
		object IEnumerator.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x0400003B RID: 59
		int int_0;

		// Token: 0x0400003C RID: 60
		object object_0;

		// Token: 0x0400003D RID: 61
		public string string_0;

		// Token: 0x0400003E RID: 62
		public string string_1;

		// Token: 0x0400003F RID: 63
		public string string_2;

		// Token: 0x04000040 RID: 64
		public Class0 class0_0;

		// Token: 0x04000041 RID: 65
		UnityWebRequest unityWebRequest_0;
	}

	// Token: 0x0200000A RID: 10
	[CompilerGenerated]
	sealed class Class7 : IEnumerator<object>, IEnumerator, IDisposable
	{
		// Token: 0x06000041 RID: 65 RVA: 0x00002484 File Offset: 0x00000684
		[DebuggerHidden]
		public Class7(int int_1)
		{
			
			
			this.int_0 = int_1;
		}

		// Token: 0x06000042 RID: 66 RVA: 0x000023E7 File Offset: 0x000005E7
		[DebuggerHidden]
		void IDisposable.Dispose()
		{
		}

		// Token: 0x06000043 RID: 67 RVA: 0x00004350 File Offset: 0x00002550
		bool IEnumerator.MoveNext()
		{
			int num = this.int_0;
			if (num == 0)
			{
				this.int_0 = -1;
				string uri = "https://api.masteropen.layabox.com/layapay/getorderinfo?order_id=" + Class0.string_11 + "&account=souyou&app_id=10001";
				this.unityWebRequest_0 = UnityWebRequest.Get(uri);
				this.object_0 = this.unityWebRequest_0.SendWebRequest();
				this.int_0 = 1;
				return true;
			}
			if (num != 1)
			{
				return false;
			}
			this.int_0 = -1;
			if (this.unityWebRequest_0.error != null)
			{
				if (this.unityWebRequest_0.error.ToString() == "Cannot resolve destination host")
				{
					UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请检查网络");
				}
			}
			else
			{
				Class19 @class = Class19.smethod_12(this.unityWebRequest_0.downloadHandler.text, -2, false, false);
				if (@class == null)
				{
					UnityEngine.Debug.Log("LayaAir3D UnityPlugin : 获得失败");
				}
				else if (@class.method_57("data").method_57("status").ToString() == "1" && PaymentPage.bool_3)
				{
					PaymentPage.paymentPage_0.Close();
					PaymentPage.bool_3 = false;
					LoginWindow.class0_0.method_0(LoginWindow.string_0, LoginWindow.string_1, false);
				}
			}
			return false;
		}

		// Token: 0x1700000D RID: 13
		// (get) Token: 0x06000044 RID: 68 RVA: 0x00002498 File Offset: 0x00000698
		object IEnumerator<object>.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x06000045 RID: 69 RVA: 0x000023F1 File Offset: 0x000005F1
		[DebuggerHidden]
		void IEnumerator.Reset()
		{
			throw new NotSupportedException();
		}

		// Token: 0x1700000E RID: 14
		// (get) Token: 0x06000046 RID: 70 RVA: 0x00002498 File Offset: 0x00000698
		object IEnumerator.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x04000042 RID: 66
		int int_0;

		// Token: 0x04000043 RID: 67
		object object_0;

		// Token: 0x04000044 RID: 68
		UnityWebRequest unityWebRequest_0;
	}

	// Token: 0x0200000B RID: 11
	[CompilerGenerated]
	sealed class Class8 : IEnumerator<object>, IEnumerator, IDisposable
	{
		// Token: 0x06000047 RID: 71 RVA: 0x000024A0 File Offset: 0x000006A0
		[DebuggerHidden]
		public Class8(int int_2)
		{
			
			
			this.int_0 = int_2;
		}

		// Token: 0x06000048 RID: 72 RVA: 0x000023E7 File Offset: 0x000005E7
		[DebuggerHidden]
		void IDisposable.Dispose()
		{
		}

		// Token: 0x06000049 RID: 73 RVA: 0x00004470 File Offset: 0x00002670
		bool IEnumerator.MoveNext()
		{
			int num = this.int_0;
			if (num == 0)
			{
				this.int_0 = -1;
				string uri = "";
				switch (this.int_1)
				{
				case 0:
					uri = "http://layamarket.layabox.com/pvr/2.0/MouthPay.jpg?v=[version]";
					break;
				case 1:
					uri = "http://layamarket.layabox.com/pvr/2.0/quarterPay.jpg?v=[version]";
					break;
				case 2:
					uri = "http://layamarket.layabox.com/pvr/2.0/YearPay.jpg?v=[version]";
					break;
				case 3:
					uri = "http://layamarket.layabox.com/pvr/2.0/qiye1.jpg?v=[version]";
					break;
				}
				this.unityWebRequest_0 = UnityWebRequest.Get(uri);
				this.object_0 = this.unityWebRequest_0.SendWebRequest();
				this.int_0 = 1;
				return true;
			}
			if (num != 1)
			{
				return false;
			}
			this.int_0 = -1;
			switch (this.int_1)
			{
			case 0:
			{
				Texture2D texture2D = new Texture2D(900, 600);
				texture2D.LoadImage(this.unityWebRequest_0.downloadHandler.data);
				PaymentPage.texture2D_5 = texture2D;
				PaymentPage.texture2D_0 = PaymentPage.texture2D_5;
				PaymentPage.paymentPage_0.Repaint();
				break;
			}
			case 1:
			{
				Texture2D texture2D2 = new Texture2D(900, 600);
				texture2D2.LoadImage(this.unityWebRequest_0.downloadHandler.data);
				PaymentPage.texture2D_6 = texture2D2;
				PaymentPage.texture2D_0 = PaymentPage.texture2D_6;
				PaymentPage.paymentPage_0.Repaint();
				break;
			}
			case 2:
			{
				Texture2D texture2D3 = new Texture2D(900, 600);
				texture2D3.LoadImage(this.unityWebRequest_0.downloadHandler.data);
				PaymentPage.texture2D_7 = texture2D3;
				PaymentPage.texture2D_0 = PaymentPage.texture2D_7;
				PaymentPage.paymentPage_0.Repaint();
				break;
			}
			case 3:
			{
				Texture2D texture2D4 = new Texture2D(900, 600);
				texture2D4.LoadImage(this.unityWebRequest_0.downloadHandler.data);
				PaymentPage.texture2D_8 = texture2D4;
				PaymentPage.texture2D_0 = PaymentPage.texture2D_8;
				PaymentPage.paymentPage_0.Repaint();
				break;
			}
			}
			return false;
		}

		// Token: 0x1700000F RID: 15
		// (get) Token: 0x0600004A RID: 74 RVA: 0x000024B4 File Offset: 0x000006B4
		object IEnumerator<object>.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x0600004B RID: 75 RVA: 0x000023F1 File Offset: 0x000005F1
		[DebuggerHidden]
		void IEnumerator.Reset()
		{
			throw new NotSupportedException();
		}

		// Token: 0x17000010 RID: 16
		// (get) Token: 0x0600004C RID: 76 RVA: 0x000024B4 File Offset: 0x000006B4
		object IEnumerator.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x04000045 RID: 69
		int int_0;

		// Token: 0x04000046 RID: 70
		object object_0;

		// Token: 0x04000047 RID: 71
		public int int_1;

		// Token: 0x04000048 RID: 72
		UnityWebRequest unityWebRequest_0;
	}

	// Token: 0x0200000C RID: 12
	[CompilerGenerated]
	sealed class Class9 : IEnumerator<object>, IEnumerator, IDisposable
	{
		// Token: 0x0600004D RID: 77 RVA: 0x000024BC File Offset: 0x000006BC
		[DebuggerHidden]
		public Class9(int int_1)
		{
			
			
			this.int_0 = int_1;
		}

		// Token: 0x0600004E RID: 78 RVA: 0x000023E7 File Offset: 0x000005E7
		[DebuggerHidden]
		void IDisposable.Dispose()
		{
		}

		// Token: 0x0600004F RID: 79 RVA: 0x00004634 File Offset: 0x00002834
		bool IEnumerator.MoveNext()
		{
			int num = this.int_0;
			if (num == 0)
			{
				this.int_0 = -1;
				string uri = "https://developers.masteropen.layabox.com/auth/uuid_list?access_token=" + Class0.string_4;
				this.unityWebRequest_0 = UnityWebRequest.Get(uri);
				this.object_0 = this.unityWebRequest_0.SendWebRequest();
				this.int_0 = 1;
				return true;
			}
			if (num != 1)
			{
				return false;
			}
			this.int_0 = -1;
			if (this.unityWebRequest_0.error != null)
			{
				if (this.unityWebRequest_0.error.ToString() == "Cannot resolve destination host")
				{
					Class0.int_2 = 5;
					UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请检查网络");
				}
			}
			else
			{
				Class19 @class = Class19.smethod_12(this.unityWebRequest_0.downloadHandler.text, -2, false, false);
				Class0.class19_0 = @class;
				if (@class == null)
				{
					Class0.int_2 = 5;
					UnityEngine.Debug.Log("LayaAir3D UnityPlugin : 获得失败");
				}
				else
				{
					if (@class.method_57("ret").method_2() != 0f)
					{
						Class0.int_2 = 5;
						UnityEngine.Debug.LogError("Login Fail");
					}
					List<string> list_ = @class.method_57("data").list_1;
					LoginWindow.list_0.Clear();
					for (int i = 0; i < list_.Count; i++)
					{
						LoginWindow.list_0.Add(@class.method_57("data").method_57(list_[i]).method_57("os").string_0);
					}
					Class0.int_2 = 2;
					PaymentPage.bool_2 = false;
					LoginWindow.loginWindow_0.Repaint();
				}
			}
			return false;
		}

		// Token: 0x17000011 RID: 17
		// (get) Token: 0x06000050 RID: 80 RVA: 0x000024D0 File Offset: 0x000006D0
		object IEnumerator<object>.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x06000051 RID: 81 RVA: 0x000023F1 File Offset: 0x000005F1
		[DebuggerHidden]
		void IEnumerator.Reset()
		{
			throw new NotSupportedException();
		}

		// Token: 0x17000012 RID: 18
		// (get) Token: 0x06000052 RID: 82 RVA: 0x000024D0 File Offset: 0x000006D0
		object IEnumerator.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x04000049 RID: 73
		int int_0;

		// Token: 0x0400004A RID: 74
		object object_0;

		// Token: 0x0400004B RID: 75
		UnityWebRequest unityWebRequest_0;
	}

	// Token: 0x0200000D RID: 13
	[CompilerGenerated]
	sealed class Class10 : IEnumerator<object>, IEnumerator, IDisposable
	{
		// Token: 0x06000053 RID: 83 RVA: 0x000024D8 File Offset: 0x000006D8
		[DebuggerHidden]
		public Class10(int int_2)
		{
			
			
			this.int_0 = int_2;
		}

		// Token: 0x06000054 RID: 84 RVA: 0x000023E7 File Offset: 0x000005E7
		[DebuggerHidden]
		void IDisposable.Dispose()
		{
		}

		// Token: 0x06000055 RID: 85 RVA: 0x000047B0 File Offset: 0x000029B0
		bool IEnumerator.MoveNext()
		{
			int num = this.int_0;
			if (num == 0)
			{
				this.int_0 = -1;
				List<string> list_ = Class0.class19_0.method_57("data").list_1;
				string uri = string.Concat(new object[]
				{
					"http://developers.masteropen.layabox.com/auth/uuid_unbind?access_token=",
					Class0.string_4,
					"&id=",
					Class0.class19_0.method_57("data").method_57(list_[this.int_1]).method_57("id").long_0
				});
				this.unityWebRequest_0 = UnityWebRequest.Get(uri);
				this.object_0 = this.unityWebRequest_0.SendWebRequest();
				this.int_0 = 1;
				return true;
			}
			if (num != 1)
			{
				return false;
			}
			this.int_0 = -1;
			if (this.unityWebRequest_0.error != null)
			{
				if (this.unityWebRequest_0.error.ToString() == "Cannot resolve destination host")
				{
					UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请检查网络");
				}
			}
			else
			{
				Class19 @class = Class19.smethod_12(this.unityWebRequest_0.downloadHandler.text, -2, false, false);
				if (@class == null)
				{
					UnityEngine.Debug.Log("LayaAir3D UnityPlugin : 获得失败");
				}
				else if (@class.method_57("ret").long_0 == 0L)
				{
					LoginWindow.class0_0.method_0(LoginWindow.string_0, LoginWindow.string_1, false);
					LoginWindow.int_0 = 3;
					LoginWindow.int_1 = 0;
					LoginWindow.loginWindow_0.Repaint();
				}
				else
				{
					LoginWindow.int_0 = 1;
					LoginWindow.int_1 = 0;
					LoginWindow.loginWindow_0.Repaint();
				}
			}
			return false;
		}

		// Token: 0x17000013 RID: 19
		// (get) Token: 0x06000056 RID: 86 RVA: 0x000024EC File Offset: 0x000006EC
		object IEnumerator<object>.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x06000057 RID: 87 RVA: 0x000023F1 File Offset: 0x000005F1
		[DebuggerHidden]
		void IEnumerator.Reset()
		{
			throw new NotSupportedException();
		}

		// Token: 0x17000014 RID: 20
		// (get) Token: 0x06000058 RID: 88 RVA: 0x000024EC File Offset: 0x000006EC
		object IEnumerator.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x0400004C RID: 76
		int int_0;

		// Token: 0x0400004D RID: 77
		object object_0;

		// Token: 0x0400004E RID: 78
		public int int_1;

		// Token: 0x0400004F RID: 79
		UnityWebRequest unityWebRequest_0;
	}

	// Token: 0x0200000E RID: 14
	[CompilerGenerated]
	sealed class Class11 : IEnumerator<object>, IEnumerator, IDisposable
	{
		// Token: 0x06000059 RID: 89 RVA: 0x000024F4 File Offset: 0x000006F4
		[DebuggerHidden]
		public Class11(int int_1)
		{
			
			
			this.int_0 = int_1;
		}

		// Token: 0x0600005A RID: 90 RVA: 0x000023E7 File Offset: 0x000005E7
		[DebuggerHidden]
		void IDisposable.Dispose()
		{
		}

		// Token: 0x0600005B RID: 91 RVA: 0x0000492C File Offset: 0x00002B2C
		bool IEnumerator.MoveNext()
		{
			int num = this.int_0;
			if (num == 0)
			{
				this.int_0 = -1;
				string uri = string.Concat(new string[]
				{
					"http://developers.masteropen.layabox.com/developers/getuserinfo?developer_uid=",
					Class0.string_3.ToString(),
					"&access_token=",
					Class0.string_4,
					"&uuid=",
					LoginWindow.ComputerUUID
				});
				this.unityWebRequest_0 = UnityWebRequest.Get(uri);
				this.object_0 = this.unityWebRequest_0.SendWebRequest();
				this.int_0 = 1;
				return true;
			}
			if (num != 1)
			{
				return false;
			}
			this.int_0 = -1;
			if (this.unityWebRequest_0.error != null)
			{
				if (this.unityWebRequest_0.error.ToString() == "Cannot resolve destination host")
				{
					UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请检查网络");
				}
			}
			else
			{
				Class19 @class = Class19.smethod_12(this.unityWebRequest_0.downloadHandler.text, -2, false, false);
				if (@class == null)
				{
					UnityEngine.Debug.Log("LayaAir3D UnityPlugin : 用户信息获取失败");
				}
				else if (@class.method_57("ret").method_2() == 3f)
				{
					LoginWindow.int_0 = 4;
					Class25.smethod_0();
				}
				else
				{
					UnityEngine.Debug.Log(Class32.string_0 + "Start Exporting");
					if (LayaAir3D.Ios)
					{
						LayaAir3D.exportResource(false, 1, "/iOS");
					}
					if (LayaAir3D.Android)
					{
						LayaAir3D.exportResource(false, 2, "/Android");
					}
					if (LayaAir3D.Conventional)
					{
						LayaAir3D.exportResource(false, 0, "/Conventional");
					}
					if (Class0.int_0 == 0)
					{
						UnityEngine.Debug.Log(Class32.string_0 + "Exporting Success");
					}
				}
			}
			return false;
		}

		// Token: 0x17000015 RID: 21
		// (get) Token: 0x0600005C RID: 92 RVA: 0x00002508 File Offset: 0x00000708
		object IEnumerator<object>.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x0600005D RID: 93 RVA: 0x000023F1 File Offset: 0x000005F1
		[DebuggerHidden]
		void IEnumerator.Reset()
		{
			throw new NotSupportedException();
		}

		// Token: 0x17000016 RID: 22
		// (get) Token: 0x0600005E RID: 94 RVA: 0x00002508 File Offset: 0x00000708
		object IEnumerator.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x04000050 RID: 80
		int int_0;

		// Token: 0x04000051 RID: 81
		object object_0;

		// Token: 0x04000052 RID: 82
		UnityWebRequest unityWebRequest_0;
	}

	// Token: 0x0200000F RID: 15
	[CompilerGenerated]
	sealed class Class12 : IEnumerator<object>, IEnumerator, IDisposable
	{
		// Token: 0x0600005F RID: 95 RVA: 0x00002510 File Offset: 0x00000710
		[DebuggerHidden]
		public Class12(int int_1)
		{
			
			
			this.int_0 = int_1;
		}

		// Token: 0x06000060 RID: 96 RVA: 0x000023E7 File Offset: 0x000005E7
		[DebuggerHidden]
		void IDisposable.Dispose()
		{
		}

		// Token: 0x06000061 RID: 97 RVA: 0x00004AB8 File Offset: 0x00002CB8
		bool IEnumerator.MoveNext()
		{
			int num = this.int_0;
			if (num == 0)
			{
				this.int_0 = -1;
				string uri = "http://developers.masteropen.layabox.com/auth/logoutUuid?access_token=" + Class0.string_4 + "&uuid=" + LoginWindow.ComputerUUID;
				this.unityWebRequest_0 = UnityWebRequest.Get(uri);
				this.object_0 = this.unityWebRequest_0.SendWebRequest();
				this.int_0 = 1;
				return true;
			}
			if (num != 1)
			{
				return false;
			}
			this.int_0 = -1;
			if (this.unityWebRequest_0.error != null)
			{
				if (this.unityWebRequest_0.error.ToString() == "Cannot resolve destination host")
				{
					UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请检查网络");
				}
			}
			else if (Class19.smethod_12(this.unityWebRequest_0.downloadHandler.text, -2, false, false) == null)
			{
				UnityEngine.Debug.Log("LayaAir3D UnityPlugin : 用户信息获取失败");
			}
			return false;
		}

		// Token: 0x17000017 RID: 23
		// (get) Token: 0x06000062 RID: 98 RVA: 0x00002524 File Offset: 0x00000724
		object IEnumerator<object>.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x06000063 RID: 99 RVA: 0x000023F1 File Offset: 0x000005F1
		[DebuggerHidden]
		void IEnumerator.Reset()
		{
			throw new NotSupportedException();
		}

		// Token: 0x17000018 RID: 24
		// (get) Token: 0x06000064 RID: 100 RVA: 0x00002524 File Offset: 0x00000724
		object IEnumerator.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x04000053 RID: 83
		int int_0;

		// Token: 0x04000054 RID: 84
		object object_0;

		// Token: 0x04000055 RID: 85
		UnityWebRequest unityWebRequest_0;
	}

	// Token: 0x02000010 RID: 16
	[CompilerGenerated]
	sealed class Class13 : IEnumerator<object>, IEnumerator, IDisposable
	{
		// Token: 0x06000065 RID: 101 RVA: 0x0000252C File Offset: 0x0000072C
		[DebuggerHidden]
		public Class13(int int_1)
		{
			
			
			this.int_0 = int_1;
		}

		// Token: 0x06000066 RID: 102 RVA: 0x000023E7 File Offset: 0x000005E7
		[DebuggerHidden]
		void IDisposable.Dispose()
		{
		}

		// Token: 0x06000067 RID: 103 RVA: 0x00004B80 File Offset: 0x00002D80
		bool IEnumerator.MoveNext()
		{
			int num = this.int_0;
			if (num == 0)
			{
				this.int_0 = -1;
				string uri = "http://118.89.114.231:10003/download/ideinfo/adconfig.json?v=123456";
				this.unityWebRequest_0 = UnityWebRequest.Get(uri);
				this.object_0 = this.unityWebRequest_0.SendWebRequest();
				this.int_0 = 1;
				return true;
			}
			if (num != 1)
			{
				return false;
			}
			this.int_0 = -1;
			if (this.unityWebRequest_0.error != null)
			{
				if (this.unityWebRequest_0.error.ToString() == "Cannot resolve destination host")
				{
					UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请检查网络");
				}
			}
			else
			{
				Class19 @class = Class19.smethod_12(this.unityWebRequest_0.downloadHandler.text, -2, false, false);
				if (@class == null)
				{
					UnityEngine.Debug.Log("LayaAir3D UnityPlugin : 用户信息获取失败");
				}
				else
				{
					Class26.string_0 = @class.method_57("webviewad").method_55(0).method_57("unityUrl").string_0;
					Class26.int_0 = (int)@class.method_57("webviewad").method_55(0).method_57("unityWidth").long_0;
					Class26.int_1 = (int)@class.method_57("webviewad").method_55(0).method_57("unityHeight").long_0;
					Class26.smethod_0();
					Class26.class26_0.Repaint();
				}
			}
			return false;
		}

		// Token: 0x17000019 RID: 25
		// (get) Token: 0x06000068 RID: 104 RVA: 0x00002540 File Offset: 0x00000740
		object IEnumerator<object>.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x06000069 RID: 105 RVA: 0x000023F1 File Offset: 0x000005F1
		[DebuggerHidden]
		void IEnumerator.Reset()
		{
			throw new NotSupportedException();
		}

		// Token: 0x1700001A RID: 26
		// (get) Token: 0x0600006A RID: 106 RVA: 0x00002540 File Offset: 0x00000740
		object IEnumerator.Current
		{
			[DebuggerHidden]
			get
			{
				return this.object_0;
			}
		}

		// Token: 0x04000056 RID: 86
		int int_0;

		// Token: 0x04000057 RID: 87
		object object_0;

		// Token: 0x04000058 RID: 88
		UnityWebRequest unityWebRequest_0;
	}

	// Token: 0x06000001 RID: 1 RVA: 0x00003230 File Offset: 0x00001430
	public void method_0(string string_13, string string_14, bool bool_4 = false)
	{
		Class0.string_8 = "";
		Class0.dictionary_0.Clear();
		Class0.dictionary_0.Add("identifier", string_13);
		Class0.dictionary_0.Add("password", string_14);
		if (!(string_13 == "") && !(string_14 == ""))
		{
			if (string_13[0] == '1')
			{
				Class0.dictionary_0.Add("idtype", "3");
			}
			else
			{
				Class0.dictionary_0.Add("idtype", "1");
			}
			Class28.smethod_0(this.method_2("http://api.masteropen.layabox.com/layapassport/login", Class0.dictionary_0, bool_4), this);
			return;
		}
		Class0.int_2 = 3;
	}

	// Token: 0x06000002 RID: 2 RVA: 0x000021F0 File Offset: 0x000003F0
	public void method_1(string string_13)
	{
		Class28.smethod_0(this.method_5("https://api.nodedevelopers.layabox.com/pvr/exchange", Class0.byte_0, Class0.string_6, Class0.string_7, string_13), this);
	}

	// Token: 0x06000003 RID: 3 RVA: 0x00002214 File Offset: 0x00000414
	IEnumerator method_2(string string_13, Dictionary<string, string> dictionary_1, bool bool_4)
	{
		Class0.Class1 @class = new Class0.Class1(0);
		@class.class0_0 = this;
		@class.dictionary_0 = dictionary_1;
		@class.bool_0 = bool_4;
		return @class;
	}

	// Token: 0x06000004 RID: 4 RVA: 0x00002231 File Offset: 0x00000431
	IEnumerator method_3(Class19 class19_1, bool bool_4)
	{
		Class0.Class2 @class = new Class0.Class2(0);
		@class.class0_0 = this;
		@class.class19_0 = class19_1;
		@class.bool_0 = bool_4;
		return @class;
	}

	// Token: 0x06000005 RID: 5 RVA: 0x0000224E File Offset: 0x0000044E
	IEnumerator method_4(Class19 class19_1, bool bool_4)
	{
		Class0.Class3 @class = new Class0.Class3(0);
		@class.class0_0 = this;
		@class.class19_0 = class19_1;
		@class.bool_0 = bool_4;
		return @class;
	}

	// Token: 0x06000006 RID: 6 RVA: 0x0000226B File Offset: 0x0000046B
	IEnumerator method_5(string string_13, byte[] byte_3, string string_14, string string_15, string string_16)
	{
		Class0.Class4 @class = new Class0.Class4(0);
		@class.class0_0 = this;
		@class.string_2 = string_13;
		@class.byte_0 = byte_3;
		@class.string_0 = string_14;
		@class.string_1 = string_15;
		@class.string_3 = string_16;
		return @class;
	}

	// Token: 0x06000007 RID: 7 RVA: 0x0000229F File Offset: 0x0000049F
	public void method_6(string string_13, int int_3)
	{
		Class28.smethod_0(this.method_7(string_13, int_3), this);
	}

	// Token: 0x06000008 RID: 8 RVA: 0x000022B0 File Offset: 0x000004B0
	IEnumerator method_7(string string_13, int int_3)
	{
		Class0.Class5 @class = new Class0.Class5(0);
		@class.class0_0 = this;
		@class.string_0 = string_13;
		@class.int_1 = int_3;
		return @class;
	}

	// Token: 0x06000009 RID: 9 RVA: 0x000022CD File Offset: 0x000004CD
	public void method_8()
	{
		Class28.smethod_5(this);
	}

	// Token: 0x0600000A RID: 10 RVA: 0x000022D5 File Offset: 0x000004D5
	IEnumerator method_9(string string_13, string string_14, string string_15)
	{
		if (!(Class0.string_4 == "") && !(Class0.string_3 == ""))
		{
			string uri = string.Concat(new string[]
			{
				"https://developers.masteropen.layabox.com/developers/unityrecharge?pay_type=",
				string_13,
				"&price=",
				string_14,
				"&access_token=",
				Class0.string_4,
				"&developer_uid=",
				Class0.string_3,
				"&product_id=",
				string_15
			});
			UnityWebRequest unityWebRequest = UnityWebRequest.Get(uri);
			yield return unityWebRequest.SendWebRequest();
			if (unityWebRequest.error != null)
			{
				if (unityWebRequest.error.ToString() == "Cannot resolve destination host")
				{
					UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请检查网络");
				}
				else
				{
					UnityEngine.Debug.LogError("LayaAir3D UnityPlugin : 请重新登陆");
					this.method_0(LoginWindow.string_0, LoginWindow.string_1, false);
				}
			}
			else
			{
				Class19 @class = Class19.smethod_12(unityWebRequest.downloadHandler.text, -2, false, false);
				if (@class == null)
				{
					UnityEngine.Debug.Log("LayaAir3D UnityPlugin : 获得失败");
				}
				else if (@class.method_57("ret").method_2() == 0f)
				{
					PaymentPage.string_0 = @class.method_57("data").method_57("code_src").ToString().Replace("\\/", "/").Replace("\"", "");
					PaymentPage.bool_1 = true;
					PaymentPage.smethod_2();
					PaymentPage.paymentPage_0.Repaint();
					Class0.string_11 = @class.method_57("data").method_57("order_id").ToString();
					Class0.string_11 = Class0.string_11.Replace("\"", "");
					PaymentPage.bool_3 = true;
				}
				else if (@class.method_57("ret").method_2() == 171f)
				{
					if (string_15 == "14")
					{
						PaymentPage.bool_1 = false;
						PaymentPage.texture2D_3 = PaymentPage.texture2D_17;
						PaymentPage.paymentPage_0.Repaint();
					}
					else
					{
						PaymentPage.bool_1 = false;
						PaymentPage.texture2D_3 = PaymentPage.texture2D_18;
						PaymentPage.paymentPage_0.Repaint();
					}
				}
			}
			unityWebRequest = null;
		}
		else
		{
			UnityEngine.Debug.Log("LayaAir3D UnityPlugin : Please re-login ");
		}
		yield break;
	}

	// Token: 0x0600000B RID: 11 RVA: 0x000022F9 File Offset: 0x000004F9
	public void method_10()
	{
		Class28.smethod_0(this.method_11(), this);
	}

	// Token: 0x0600000C RID: 12 RVA: 0x00002308 File Offset: 0x00000508
	IEnumerator method_11()
	{
		return new Class0.Class7(0);
	}

	// Token: 0x0600000D RID: 13 RVA: 0x00002310 File Offset: 0x00000510
	public void method_12()
	{
		Class28.smethod_0(this.method_13(1), this);
		Class28.smethod_0(this.method_13(2), this);
		Class28.smethod_0(this.method_13(3), this);
	}

	// Token: 0x0600000E RID: 14 RVA: 0x0000233C File Offset: 0x0000053C
	IEnumerator method_13(int int_3)
	{
		Class0.Class8 @class = new Class0.Class8(0);
		@class.int_1 = int_3;
		return @class;
	}

	// Token: 0x0600000F RID: 15 RVA: 0x0000234B File Offset: 0x0000054B
	void method_14()
	{
		Class28.smethod_0(this.method_15(), this);
	}

	// Token: 0x06000010 RID: 16 RVA: 0x0000235A File Offset: 0x0000055A
	IEnumerator method_15()
	{
		return new Class0.Class9(0);
	}

	// Token: 0x06000011 RID: 17 RVA: 0x00002362 File Offset: 0x00000562
	public void method_16(int int_3)
	{
		Class28.smethod_0(this.method_17(int_3), this);
	}

	// Token: 0x06000012 RID: 18 RVA: 0x00002372 File Offset: 0x00000572
	IEnumerator method_17(int int_3)
	{
		Class0.Class10 @class = new Class0.Class10(0);
		@class.int_1 = int_3;
		return @class;
	}

	// Token: 0x06000013 RID: 19 RVA: 0x000032E0 File Offset: 0x000014E0
	static string smethod_0(string string_13)
	{
		DateTime dateTime = TimeZoneInfo.ConvertTimeToUtc(new DateTime(1970, 1, 1));
		long ticks = long.Parse(string_13 + "0000000");
		TimeSpan value = new TimeSpan(ticks);
		string[] array = dateTime.Add(value).ToShortDateString().ToString().Split(new char[]
		{
			'/'
		});
		return string.Concat(new string[]
		{
			array[2],
			"/",
			array[0],
			"/",
			array[1],
			" "
		});
	}

	// Token: 0x06000014 RID: 20 RVA: 0x00003378 File Offset: 0x00001578
	public static long smethod_1(bool bool_4 = true)
	{
		TimeSpan timeSpan = DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0, 0);
		long result;
		if (bool_4)
		{
			result = Convert.ToInt64(timeSpan.TotalSeconds);
		}
		else
		{
			result = Convert.ToInt64(timeSpan.TotalMilliseconds);
		}
		return result;
	}

	// Token: 0x06000015 RID: 21 RVA: 0x00002381 File Offset: 0x00000581
	public void method_18()
	{
		Class28.smethod_0(this.method_19(), this);
	}

	// Token: 0x06000016 RID: 22 RVA: 0x00002390 File Offset: 0x00000590
	IEnumerator method_19()
	{
		return new Class0.Class11(0);
	}

	// Token: 0x06000017 RID: 23 RVA: 0x00002398 File Offset: 0x00000598
	public void method_20()
	{
		Class28.smethod_0(this.method_21(), this);
	}

	// Token: 0x06000018 RID: 24 RVA: 0x000023A7 File Offset: 0x000005A7
	IEnumerator method_21()
	{
		return new Class0.Class12(0);
	}

	// Token: 0x06000019 RID: 25 RVA: 0x000023AF File Offset: 0x000005AF
	public void method_22()
	{
		Class28.smethod_0(this.method_23(), this);
	}

	// Token: 0x0600001A RID: 26 RVA: 0x000023BE File Offset: 0x000005BE
	IEnumerator method_23()
	{
		return new Class0.Class13(0);
	}

	// Token: 0x0600001B RID: 27 RVA: 0x000023C6 File Offset: 0x000005C6
	public Class0()
	{
		
		
	}

	// Token: 0x0600001C RID: 28 RVA: 0x000033C0 File Offset: 0x000015C0
	// Note: this type is marked as 'beforefieldinit'.
	static Class0()
	{
		
		Class0.int_0 = 0;
		Class0.bool_0 = false;
		Class0.bool_1 = false;
		Class0.bool_2 = false;
		Class0.string_3 = "";
		Class0.string_4 = "";
		Class0.string_8 = "";
		Class0.string_9 = "";
		Class0.string_10 = "0";
		Class0.bool_3 = false;
		Class0.dictionary_0 = new Dictionary<string, string>();
		Class0.int_2 = 0;
	}

	// Token: 0x04000001 RID: 1
	public static int int_0;

	// Token: 0x04000002 RID: 2
	public static string string_0;

	// Token: 0x04000003 RID: 3
	public static int int_1;

	// Token: 0x04000004 RID: 4
	public static bool bool_0;

	// Token: 0x04000005 RID: 5
	public static bool bool_1;

	// Token: 0x04000006 RID: 6
	public static bool bool_2;

	// Token: 0x04000007 RID: 7
	public static string string_1;

	// Token: 0x04000008 RID: 8
	public static string string_2;

	// Token: 0x04000009 RID: 9
	static string string_3;

	// Token: 0x0400000A RID: 10
	public static string string_4;

	// Token: 0x0400000B RID: 11
	public static byte[] byte_0;

	// Token: 0x0400000C RID: 12
	public static string string_5;

	// Token: 0x0400000D RID: 13
	public static string string_6;

	// Token: 0x0400000E RID: 14
	public static string string_7;

	// Token: 0x0400000F RID: 15
	public static string string_8;

	// Token: 0x04000010 RID: 16
	static Class19 class19_0;

	// Token: 0x04000011 RID: 17
	public static string string_9;

	// Token: 0x04000012 RID: 18
	public static string string_10;

	// Token: 0x04000013 RID: 19
	public static bool bool_3;

	// Token: 0x04000014 RID: 20
	public static Dictionary<string, string> dictionary_0;

	// Token: 0x04000015 RID: 21
	public static int int_2;

	// Token: 0x04000016 RID: 22
	byte[] byte_1;

	// Token: 0x04000017 RID: 23
	byte[] byte_2;

	// Token: 0x04000018 RID: 24
	static string string_11;

	// Token: 0x04000019 RID: 25
	public static string string_12;
}
