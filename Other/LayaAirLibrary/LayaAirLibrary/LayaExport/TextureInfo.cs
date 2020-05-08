using System;

using UnityEditor;
using UnityEngine;

namespace LayaExport
{
	// Token: 0x02000048 RID: 72
	public class TextureInfo
	{
		// Token: 0x06000218 RID: 536 RVA: 0x000023C6 File Offset: 0x000005C6
		public TextureInfo()
		{
			
			
		}

		// Token: 0x0400022B RID: 555
		public TextureImporterType lastType;

		// Token: 0x0400022C RID: 556
		public bool lastReadable;

		// Token: 0x0400022D RID: 557
		public TextureImporterCompression lastCompression;

		// Token: 0x0400022E RID: 558
		public Texture2D texture;

		// Token: 0x0400022F RID: 559
		public string SavePath;

		// Token: 0x04000230 RID: 560
		public string Path;

		// Token: 0x04000231 RID: 561
		public int format;

		// Token: 0x04000232 RID: 562
		public int MipMap;
	}
}
