using mVjiDBJbRPt2wl7USA;
using System;
using System.Reflection;

namespace iObUfMBUZrLZGAe2ZH
{
	internal class dBi2BH6rvPCyWTipbn
	{
		internal delegate void SFU4mbT3GMret7THonf(object o);

		internal static Module xl5rKRvEJ;

		internal static void v79BSkccQJXj1(int typemdt)
		{
			Type type = xl5rKRvEJ.ResolveType(33554432 + typemdt);
			FieldInfo[] fields = type.GetFields();
			foreach (FieldInfo fieldInfo in fields)
			{
				MethodInfo method = (MethodInfo)xl5rKRvEJ.ResolveMethod(fieldInfo.MetadataToken + 100663296);
				fieldInfo.SetValue(null, (MulticastDelegate)Delegate.CreateDelegate(type, method));
			}
		}

		public dBi2BH6rvPCyWTipbn()
		{
			UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
			base._002Ector();
		}

		static dBi2BH6rvPCyWTipbn()
		{
			UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
			xl5rKRvEJ = typeof(dBi2BH6rvPCyWTipbn).Assembly.ManifestModule;
		}
	}
}
