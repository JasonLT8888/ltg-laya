using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading;


// Token: 0x0200001E RID: 30
[DefaultMember("Item")]
class Class19
{
    // Token: 0x0200001F RID: 31
    public enum Enum2
    {
        // Token: 0x04000160 RID: 352
        const_0,
        // Token: 0x04000161 RID: 353
        const_1,
        // Token: 0x04000162 RID: 354
        const_2,
        // Token: 0x04000163 RID: 355
        const_3,
        // Token: 0x04000164 RID: 356
        const_4,
        // Token: 0x04000165 RID: 357
        const_5,
        // Token: 0x04000166 RID: 358
        const_6
    }

    // Token: 0x02000020 RID: 32
    // (Invoke) Token: 0x0600011F RID: 287
    public delegate void Delegate0(Class19 class19_0);

    // Token: 0x02000021 RID: 33
    // (Invoke) Token: 0x06000123 RID: 291
    delegate void Delegate1(string string_0);

    // Token: 0x02000022 RID: 34
    // (Invoke) Token: 0x06000127 RID: 295
    delegate void Delegate2(Class19 class19_0);

    // Token: 0x02000023 RID: 35
    [CompilerGenerated]
    sealed class Class20 : IEnumerator<object>, IEnumerator, IDisposable
    {
        // Token: 0x0600012A RID: 298 RVA: 0x00002C59 File Offset: 0x00000E59
        [DebuggerHidden]
        public Class20(int int_2)
        {


            this.int_0 = int_2;
            this.int_1 = Thread.CurrentThread.ManagedThreadId;
        }

        // Token: 0x0600012B RID: 299 RVA: 0x0000C854 File Offset: 0x0000AA54
        [DebuggerHidden]
        void IDisposable.Dispose()
        {
            int num = this.int_0;
            if (num == -3 || num == 1)
            {
                try
                {
                }
                finally
                {
                    this.method_0();
                }
            }
        }

        // Token: 0x0600012C RID: 300 RVA: 0x0000C88C File Offset: 0x0000AA8C
        bool IEnumerator.MoveNext()
        {
            bool result;
            try
            {
                int num = this.int_0;
                Class19 @class = this.class19_0;
                if (num != 0)
                {
                    if (num != 1)
                    {
                        return false;
                    }
                    this.int_0 = -3;
                }
                else
                {
                    this.int_0 = -1;
                    if (@class.enum2_0 == Class19.Enum2.const_6)
                    {
                        goto IL_9D;
                    }
                    this.ienumerator_0 = @class.method_52(false).GetEnumerator();
                    this.int_0 = -3;
                }
                while (this.ienumerator_0.MoveNext())
                {
                    string text = this.ienumerator_0.Current;
                    if (text == null)
                    {
                        this.object_0 = text;
                        this.int_0 = 1;
                        return true;
                    }
                    @class.string_0 = text;
                }
                this.method_0();
                this.ienumerator_0 = null;
                @class.enum2_0 = Class19.Enum2.const_6;
            IL_9D:
                result = false;
            }
            catch (Exception e)
            {
                throw e;
            }
            return result;
        }

        // Token: 0x0600012D RID: 301 RVA: 0x00002C7D File Offset: 0x00000E7D
        void method_0()
        {
            this.int_0 = -1;
            if (this.ienumerator_0 != null)
            {
                this.ienumerator_0.Dispose();
            }
        }

        // Token: 0x1700001B RID: 27
        // (get) Token: 0x0600012E RID: 302 RVA: 0x00002C99 File Offset: 0x00000E99
        object IEnumerator<object>.Current
        {
            [DebuggerHidden]
            get
            {
                return this.object_0;
            }
        }

        // Token: 0x0600012F RID: 303 RVA: 0x000023F1 File Offset: 0x000005F1
        [DebuggerHidden]
        void IEnumerator.Reset()
        {
            throw new NotSupportedException();
        }

        // Token: 0x1700001C RID: 28
        // (get) Token: 0x06000130 RID: 304 RVA: 0x00002C99 File Offset: 0x00000E99
        object IEnumerator.Current
        {
            [DebuggerHidden]
            get
            {
                return this.object_0;
            }
        }

        // Token: 0x06000131 RID: 305 RVA: 0x0000C954 File Offset: 0x0000AB54
        [DebuggerHidden]
        IEnumerator<object> GetEnumerator()
        {
            Class19.Class20 @class;
            if (this.int_0 == -2 && this.int_1 == Thread.CurrentThread.ManagedThreadId)
            {
                this.int_0 = 0;
                @class = this;
            }
            else
            {
                @class = new Class19.Class20(0);
                @class.class19_0 = this.class19_0;
            }
            return @class;
        }

        // Token: 0x04000167 RID: 359
        int int_0;

        // Token: 0x04000168 RID: 360
        object object_0;

        // Token: 0x04000169 RID: 361
        int int_1;

        // Token: 0x0400016A RID: 362
        public Class19 class19_0;

        // Token: 0x0400016B RID: 363
        IEnumerator<string> ienumerator_0;
    }

    // Token: 0x02000024 RID: 36
    [CompilerGenerated]
    sealed class Class21 : IEnumerator, IEnumerator<string>, IDisposable
    {
        // Token: 0x06000133 RID: 307 RVA: 0x00002CA9 File Offset: 0x00000EA9
        [DebuggerHidden]
        public Class21(int int_2)
        {


            this.int_0 = int_2;
            this.int_1 = Thread.CurrentThread.ManagedThreadId;
        }

        // Token: 0x06000134 RID: 308 RVA: 0x0000C99C File Offset: 0x0000AB9C
        [DebuggerHidden]
        void IDisposable.Dispose()
        {
            int num = this.int_0;
            if (num == -3 || num == 1)
            {
                try
                {
                }
                finally
                {
                    this.method_0();
                }
            }
        }

        // Token: 0x06000135 RID: 309 RVA: 0x0000C9D4 File Offset: 0x0000ABD4
        bool IEnumerator.MoveNext()
        {
            bool result;
            try
            {
                int num = this.int_0;
                Class19 @class = this.class19_0;
                switch (num)
                {
                    case 0:
                        this.int_0 = -1;
                        this.stringBuilder_0 = new StringBuilder();
                        Class19.stopwatch_0.Reset();
                        Class19.stopwatch_0.Start();
                        this.ienumerator_0 = @class.method_53(0, this.stringBuilder_0, this.bool_0).GetEnumerator();
                        this.int_0 = -3;
                        break;
                    case 1:
                        this.int_0 = -3;
                        break;
                    case 2:
                        this.int_0 = -1;
                        return false;
                    default:
                        return false;
                }
                if (!this.ienumerator_0.MoveNext())
                {
                    this.method_0();
                    this.ienumerator_0 = null;
                    this.string_0 = this.stringBuilder_0.ToString();
                    this.int_0 = 2;
                    result = true;
                }
                else
                {
                    IEnumerable enumerable = (IEnumerable)this.ienumerator_0.Current;
                    this.string_0 = null;
                    this.int_0 = 1;
                    result = true;
                }
            }
            catch (Exception e)
            {
                throw e;
            }
            return result;
        }

        // Token: 0x06000136 RID: 310 RVA: 0x0000CADC File Offset: 0x0000ACDC
        void method_0()
        {
            this.int_0 = -1;
            IDisposable disposable = this.ienumerator_0 as IDisposable;
            if (disposable != null)
            {
                disposable.Dispose();
            }
        }

        // Token: 0x1700001D RID: 29
        // (get) Token: 0x06000137 RID: 311 RVA: 0x00002CCD File Offset: 0x00000ECD
        string IEnumerator<string>.Current
        {
            [DebuggerHidden]
            get
            {
                return this.string_0;
            }
        }

        // Token: 0x06000138 RID: 312 RVA: 0x000023F1 File Offset: 0x000005F1
        [DebuggerHidden]
        void IEnumerator.Reset()
        {
            throw new NotSupportedException();
        }

        // Token: 0x1700001E RID: 30
        // (get) Token: 0x06000139 RID: 313 RVA: 0x00002CCD File Offset: 0x00000ECD
        object IEnumerator.Current
        {
            [DebuggerHidden]
            get
            {
                return this.string_0;
            }
        }

        // Token: 0x0600013A RID: 314 RVA: 0x0000CB08 File Offset: 0x0000AD08
        [DebuggerHidden]
        IEnumerator<string> GetEnumerator()
        {
            Class19.Class21 @class;
            if (this.int_0 == -2 && this.int_1 == Thread.CurrentThread.ManagedThreadId)
            {
                this.int_0 = 0;
                @class = this;
            }
            else
            {
                @class = new Class19.Class21(0);
                @class.class19_0 = this.class19_0;
            }
            @class.bool_0 = this.bool_1;
            return @class;
        }

        // Token: 0x0400016C RID: 364
        int int_0;

        // Token: 0x0400016D RID: 365
        string string_0;

        // Token: 0x0400016E RID: 366
        int int_1;

        // Token: 0x0400016F RID: 367
        public Class19 class19_0;

        // Token: 0x04000170 RID: 368
        bool bool_0;

        // Token: 0x04000171 RID: 369
        public bool bool_1;

        // Token: 0x04000172 RID: 370
        StringBuilder stringBuilder_0;

        // Token: 0x04000173 RID: 371
        IEnumerator ienumerator_0;
    }

    // Token: 0x02000025 RID: 37
    [CompilerGenerated]
    sealed class Class22 : IEnumerator<object>, IEnumerable<object>, IEnumerator, IDisposable, IEnumerable
    {
        // Token: 0x0600013C RID: 316 RVA: 0x00002CDD File Offset: 0x00000EDD
        [DebuggerHidden]
        public Class22(int int_5)
        {


            this.int_0 = int_5;
            this.int_1 = Thread.CurrentThread.ManagedThreadId;
        }

        // Token: 0x0600013D RID: 317 RVA: 0x0000CB5C File Offset: 0x0000AD5C
        [DebuggerHidden]
        void IDisposable.Dispose()
        {
            int num = this.int_0;
            if (num <= -3)
            {
                if (num != -4)
                {
                    if (num != -3)
                    {
                        return;
                    }
                    goto IL_2A;
                }
            }
            else
            {
                if (num == 2)
                {
                    goto IL_2A;
                }
                if (num != 3)
                {
                    return;
                }
            }
            try
            {
                return;
            }
            finally
            {
                this.method_1();
            }
        IL_2A:
            try
            {
            }
            finally
            {
                this.method_0();
            }
        }

        // Token: 0x0600013E RID: 318 RVA: 0x0000CBBC File Offset: 0x0000ADBC
        bool IEnumerator.MoveNext()
        {
            bool result;
            try
            {
                int num = this.int_0;
                Class19 @class = this.class19_0;
                int length;
                switch (num)
                {
                    case 0:
                        this.int_0 = -1;
                        length = this.int_2;
                        this.int_2 = length + 1;
                        if (length > 100)
                        {
                            return false;
                        }
                        if (Class19.stopwatch_0.Elapsed.TotalSeconds > 0.00800000037997961)
                        {
                            Class19.stopwatch_0.Reset();
                            this.object_0 = null;
                            this.int_0 = 1;
                            return true;
                        }
                        break;
                    case 1:
                        this.int_0 = -1;
                        Class19.stopwatch_0.Start();
                        break;
                    case 2:
                        this.int_0 = -3;
                        goto IL_38A;
                    case 3:
                        this.int_0 = -4;
                        goto IL_54D;
                    default:
                        return false;
                }
                switch (@class.enum2_0)
                {
                    case Class19.Enum2.const_0:
                        this.stringBuilder_0.Append("null");
                        goto IL_5F4;
                    case Class19.Enum2.const_1:
                        this.stringBuilder_0.AppendFormat("\"{0}\"", @class.string_0);
                        goto IL_5F4;
                    case Class19.Enum2.const_2:
                        if (@class.bool_0)
                        {
                            this.stringBuilder_0.Append(@class.long_0.ToString());
                            goto IL_5F4;
                        }
                        if (float.IsInfinity(@class.float_0))
                        {
                            this.stringBuilder_0.Append("\"INFINITY\"");
                            goto IL_5F4;
                        }
                        if (float.IsNegativeInfinity(@class.float_0))
                        {
                            this.stringBuilder_0.Append("\"NEGINFINITY\"");
                            goto IL_5F4;
                        }
                        if (float.IsNaN(@class.float_0))
                        {
                            this.stringBuilder_0.Append("\"NaN\"");
                            goto IL_5F4;
                        }
                        this.stringBuilder_0.Append(@class.float_0.ToString());
                        goto IL_5F4;
                    case Class19.Enum2.const_3:
                        this.stringBuilder_0.Append("{");
                        if (@class.list_0.Count <= 0)
                        {
                            goto IL_3D1;
                        }
                        if (this.bool_0)
                        {
                            this.stringBuilder_0.Append("\n");
                        }
                        this.int_4 = 0;
                        break;
                    case Class19.Enum2.const_4:
                        this.stringBuilder_0.Append("[");
                        if (@class.list_0.Count > 0)
                        {
                            if (this.bool_0)
                            {
                                this.stringBuilder_0.Append("\n");
                            }
                            this.int_4 = 0;
                            goto IL_4A4;
                        }
                        goto IL_594;
                    case Class19.Enum2.const_5:
                        if (@class.bool_1)
                        {
                            this.stringBuilder_0.Append("true");
                            goto IL_5F4;
                        }
                        this.stringBuilder_0.Append("false");
                        goto IL_5F4;
                    case Class19.Enum2.const_6:
                        this.stringBuilder_0.Append(@class.string_0);
                        goto IL_5F4;
                    default:
                        goto IL_5F4;
                }
            IL_2C6:
                if (this.int_4 < @class.list_0.Count)
                {
                    string arg = @class.list_1[this.int_4];
                    Class19 class2 = @class.list_0[this.int_4];
                    if (Class19.smethod_16(class2))
                    {
                        if (this.bool_0)
                        {
                            for (int i = 0; i < this.int_2; i++)
                            {
                                this.stringBuilder_0.Append("\t");
                            }
                        }
                        this.stringBuilder_0.AppendFormat("\"{0}\":", arg);
                        this.ienumerator_0 = class2.method_53(this.int_2, this.stringBuilder_0, this.bool_0).GetEnumerator();
                        this.int_0 = -3;
                        goto IL_38A;
                    }
                }
                else
                {
                    if (this.bool_0)
                    {
                        this.stringBuilder_0.Length -= 2;
                        goto IL_3D1;
                    }
                    StringBuilder stringBuilder = this.stringBuilder_0;
                    length = stringBuilder.Length;
                    stringBuilder.Length = length - 1;
                    goto IL_3D1;
                }
            IL_30B:
                length = this.int_4;
                this.int_4 = length + 1;
                goto IL_2C6;
            IL_38A:
                if (this.ienumerator_0.MoveNext())
                {
                    IEnumerable enumerable = (IEnumerable)this.ienumerator_0.Current;
                    this.object_0 = enumerable;
                    this.int_0 = 2;
                    return true;
                }
                this.method_0();
                this.ienumerator_0 = null;
                this.stringBuilder_0.Append(",");
                if (this.bool_0)
                {
                    this.stringBuilder_0.Append("\n");
                    goto IL_30B;
                }
                goto IL_30B;
            IL_3D1:
                if (this.bool_0 && @class.list_0.Count > 0)
                {
                    this.stringBuilder_0.Append("\n");
                    for (int j = 0; j < this.int_2 - 1; j++)
                    {
                        this.stringBuilder_0.Append("\t");
                    }
                }
                this.stringBuilder_0.Append("}");
                goto IL_5F4;
            IL_4A4:
                if (this.int_4 < @class.list_0.Count)
                {
                    if (Class19.smethod_16(@class.list_0[this.int_4]))
                    {
                        if (this.bool_0)
                        {
                            for (int k = 0; k < this.int_2; k++)
                            {
                                this.stringBuilder_0.Append("\t");
                            }
                        }
                        this.ienumerator_0 = @class.list_0[this.int_4].method_53(this.int_2, this.stringBuilder_0, this.bool_0).GetEnumerator();
                        this.int_0 = -4;
                        goto IL_54D;
                    }
                }
                else
                {
                    if (this.bool_0)
                    {
                        this.stringBuilder_0.Length -= 2;
                        goto IL_594;
                    }
                    StringBuilder stringBuilder2 = this.stringBuilder_0;
                    length = stringBuilder2.Length;
                    stringBuilder2.Length = length - 1;
                    goto IL_594;
                }
            IL_4D2:
                length = this.int_4;
                this.int_4 = length + 1;
                goto IL_4A4;
            IL_54D:
                if (this.ienumerator_0.MoveNext())
                {
                    IEnumerable enumerable2 = (IEnumerable)this.ienumerator_0.Current;
                    this.object_0 = enumerable2;
                    this.int_0 = 3;
                    return true;
                }
                this.method_1();
                this.ienumerator_0 = null;
                this.stringBuilder_0.Append(",");
                if (this.bool_0)
                {
                    this.stringBuilder_0.Append("\n");
                    goto IL_4D2;
                }
                goto IL_4D2;
            IL_594:
                if (this.bool_0 && @class.list_0.Count > 0)
                {
                    this.stringBuilder_0.Append("\n");
                    for (int l = 0; l < this.int_2 - 1; l++)
                    {
                        this.stringBuilder_0.Append("\t");
                    }
                }
                this.stringBuilder_0.Append("]");
            IL_5F4:
                result = false;
            }
            catch (Exception e)
            {
                throw e;
            }
            return result;
        }

        // Token: 0x0600013F RID: 319 RVA: 0x0000D20C File Offset: 0x0000B40C
        void method_0()
        {
            this.int_0 = -1;
            IDisposable disposable = this.ienumerator_0 as IDisposable;
            if (disposable != null)
            {
                disposable.Dispose();
            }
        }

        // Token: 0x06000140 RID: 320 RVA: 0x0000D20C File Offset: 0x0000B40C
        void method_1()
        {
            this.int_0 = -1;
            IDisposable disposable = this.ienumerator_0 as IDisposable;
            if (disposable != null)
            {
                disposable.Dispose();
            }
        }

        // Token: 0x1700001F RID: 31
        // (get) Token: 0x06000141 RID: 321 RVA: 0x00002D01 File Offset: 0x00000F01
        object IEnumerator<object>.Current
        {
            [DebuggerHidden]
            get
            {
                return this.object_0;
            }
        }

        // Token: 0x06000142 RID: 322 RVA: 0x000023F1 File Offset: 0x000005F1
        [DebuggerHidden]
        void IEnumerator.Reset()
        {
            throw new NotSupportedException();
        }

        // Token: 0x17000020 RID: 32
        // (get) Token: 0x06000143 RID: 323 RVA: 0x00002D01 File Offset: 0x00000F01
        object IEnumerator.Current
        {
            [DebuggerHidden]
            get
            {
                return this.object_0;
            }
        }

        // Token: 0x06000144 RID: 324 RVA: 0x0000D238 File Offset: 0x0000B438
        [DebuggerHidden]
        IEnumerator<object> IEnumerable<object>.GetEnumerator()
        {
            Class19.Class22 @class;
            if (this.int_0 == -2 && this.int_1 == Thread.CurrentThread.ManagedThreadId)
            {
                this.int_0 = 0;
                @class = this;
            }
            else
            {
                @class = new Class19.Class22(0);
                @class.class19_0 = this.class19_0;
            }
            @class.int_2 = this.int_3;
            @class.stringBuilder_0 = this.stringBuilder_1;
            @class.bool_0 = this.bool_1;
            return @class;
        }

        public IEnumerator GetEnumerator()
        {
            Class19.Class22 @class;
            if (this.int_0 == -2 && this.int_1 == Thread.CurrentThread.ManagedThreadId)
            {
                this.int_0 = 0;
                @class = this;
            }
            else
            {
                @class = new Class19.Class22(0);
                @class.class19_0 = this.class19_0;
            }
            @class.int_2 = this.int_3;
            @class.stringBuilder_0 = this.stringBuilder_1;
            @class.bool_0 = this.bool_1;
            return @class;
        }

        // Token: 0x04000174 RID: 372
        int int_0;

        // Token: 0x04000175 RID: 373
        object object_0;

        // Token: 0x04000176 RID: 374
        int int_1;

        // Token: 0x04000177 RID: 375
        int int_2;

        // Token: 0x04000178 RID: 376
        public int int_3;

        // Token: 0x04000179 RID: 377
        public Class19 class19_0;

        // Token: 0x0400017A RID: 378
        StringBuilder stringBuilder_0;

        // Token: 0x0400017B RID: 379
        public StringBuilder stringBuilder_1;

        // Token: 0x0400017C RID: 380
        bool bool_0;

        // Token: 0x0400017D RID: 381
        public bool bool_1;

        // Token: 0x0400017E RID: 382
        int int_4;

        // Token: 0x0400017F RID: 383
        IEnumerator ienumerator_0;
    }

    // Token: 0x060000C3 RID: 195 RVA: 0x00002709 File Offset: 0x00000909
    bool method_0()
    {
        return this.enum2_0 == Class19.Enum2.const_4 || this.enum2_0 == Class19.Enum2.const_3;
    }

    // Token: 0x060000C4 RID: 196 RVA: 0x0000271F File Offset: 0x0000091F
    public int method_1()
    {
        if (this.list_0 == null)
        {
            return -1;
        }
        return this.list_0.Count;
    }

    // Token: 0x060000C5 RID: 197 RVA: 0x00002736 File Offset: 0x00000936
    public float method_2()
    {
        return this.float_0;
    }

    // Token: 0x060000C6 RID: 198 RVA: 0x0000273E File Offset: 0x0000093E
    static Class19 smethod_0()
    {
        return Class19.smethod_5(Class19.Enum2.const_0);
    }

    // Token: 0x060000C7 RID: 199 RVA: 0x00002746 File Offset: 0x00000946
    static Class19 smethod_1()
    {
        return Class19.smethod_5(Class19.Enum2.const_3);
    }

    // Token: 0x060000C8 RID: 200 RVA: 0x0000274E File Offset: 0x0000094E
    static Class19 smethod_2()
    {
        return Class19.smethod_5(Class19.Enum2.const_4);
    }

    // Token: 0x060000C9 RID: 201 RVA: 0x00002756 File Offset: 0x00000956
    public Class19(Class19.Enum2 enum2_1)
    {


        this.enum2_0 = enum2_1;
        if (enum2_1 != Class19.Enum2.const_3)
        {
            if (enum2_1 == Class19.Enum2.const_4)
            {
                this.list_0 = new List<Class19>();
                return;
            }
        }
        else
        {
            this.list_0 = new List<Class19>();
            this.list_1 = new List<string>();
        }
    }

    // Token: 0x060000CA RID: 202 RVA: 0x00002794 File Offset: 0x00000994
    Class19(bool bool_2)
    {


        this.enum2_0 = Class19.Enum2.const_5;
        this.bool_1 = bool_2;
    }

    // Token: 0x060000CB RID: 203 RVA: 0x000027AF File Offset: 0x000009AF
    Class19(float float_1)
    {


        this.enum2_0 = Class19.Enum2.const_2;
        this.float_0 = float_1;
    }

    // Token: 0x060000CC RID: 204 RVA: 0x000027CA File Offset: 0x000009CA
    Class19(int int_0)
    {


        this.enum2_0 = Class19.Enum2.const_2;
        this.long_0 = (long)int_0;
        this.bool_0 = true;
        this.float_0 = (float)int_0;
    }

    // Token: 0x060000CD RID: 205 RVA: 0x000027F5 File Offset: 0x000009F5
    Class19(long long_1)
    {


        this.enum2_0 = Class19.Enum2.const_2;
        this.long_0 = long_1;
        this.bool_0 = true;
        this.float_0 = (float)long_1;
    }

    // Token: 0x060000CE RID: 206 RVA: 0x0000B91C File Offset: 0x00009B1C
    Class19(Dictionary<string, string> dictionary_0)
    {


        this.enum2_0 = Class19.Enum2.const_3;
        this.list_1 = new List<string>();
        this.list_0 = new List<Class19>();
        foreach (KeyValuePair<string, string> keyValuePair in dictionary_0)
        {
            this.list_1.Add(keyValuePair.Key);
            this.list_0.Add(Class19.smethod_10(keyValuePair.Value));
        }
    }

    // Token: 0x060000CF RID: 207 RVA: 0x0000B9B8 File Offset: 0x00009BB8
    Class19(Dictionary<string, Class19> dictionary_0)
    {


        this.enum2_0 = Class19.Enum2.const_3;
        this.list_1 = new List<string>();
        this.list_0 = new List<Class19>();
        foreach (KeyValuePair<string, Class19> keyValuePair in dictionary_0)
        {
            this.list_1.Add(keyValuePair.Key);
            this.list_0.Add(keyValuePair.Value);
        }
    }

    // Token: 0x060000D0 RID: 208 RVA: 0x0000281F File Offset: 0x00000A1F
    Class19(Class19.Delegate0 delegate0_0)
    {


        delegate0_0(this);
    }

    // Token: 0x060000D1 RID: 209 RVA: 0x00002833 File Offset: 0x00000A33
    Class19(Class19[] class19_0)
    {


        this.enum2_0 = Class19.Enum2.const_4;
        this.list_0 = new List<Class19>(class19_0);
    }

    // Token: 0x060000D2 RID: 210 RVA: 0x00002853 File Offset: 0x00000A53
    static Class19 smethod_3(string string_1)
    {
        return Class19.smethod_10(string_1);
    }

    // Token: 0x060000D3 RID: 211 RVA: 0x0000BA4C File Offset: 0x00009C4C
    void method_3(Class19 class19_0)
    {
        this.list_0.AddRange(class19_0.list_0);
        this.list_1.AddRange(class19_0.list_1);
        this.string_0 = class19_0.string_0;
        this.float_0 = class19_0.float_0;
        this.bool_0 = class19_0.bool_0;
        this.long_0 = class19_0.long_0;
        this.bool_1 = class19_0.bool_1;
        this.enum2_0 = class19_0.enum2_0;
    }

    // Token: 0x060000D4 RID: 212 RVA: 0x0000285B File Offset: 0x00000A5B
    public static Class19 smethod_4()
    {
        return new Class19();
    }

    // Token: 0x060000D5 RID: 213 RVA: 0x0000BAC4 File Offset: 0x00009CC4
    public static Class19 smethod_5(Class19.Enum2 enum2_1)
    {
        Class19 @class = Class19.smethod_4();
        @class.enum2_0 = enum2_1;
        if (enum2_1 != Class19.Enum2.const_3)
        {
            if (enum2_1 == Class19.Enum2.const_4)
            {
                @class.list_0 = new List<Class19>();
            }
        }
        else
        {
            @class.list_0 = new List<Class19>();
            @class.list_1 = new List<string>();
        }
        return @class;
    }

    // Token: 0x060000D6 RID: 214 RVA: 0x00002862 File Offset: 0x00000A62
    public static Class19 smethod_6(bool bool_2)
    {
        Class19 @class = Class19.smethod_4();
        @class.enum2_0 = Class19.Enum2.const_5;
        @class.bool_1 = bool_2;
        return @class;
    }

    // Token: 0x060000D7 RID: 215 RVA: 0x00002877 File Offset: 0x00000A77
    public static Class19 smethod_7(float float_1)
    {
        Class19 @class = Class19.smethod_4();
        @class.enum2_0 = Class19.Enum2.const_2;
        @class.float_0 = float_1;
        return @class;
    }

    // Token: 0x060000D8 RID: 216 RVA: 0x0000288C File Offset: 0x00000A8C
    public static Class19 smethod_8(int int_0)
    {
        Class19 @class = Class19.smethod_4();
        @class.enum2_0 = Class19.Enum2.const_2;
        @class.float_0 = (float)int_0;
        @class.bool_0 = true;
        @class.long_0 = (long)int_0;
        return @class;
    }

    // Token: 0x060000D9 RID: 217 RVA: 0x000028B1 File Offset: 0x00000AB1
    public static Class19 smethod_9(long long_1)
    {
        Class19 @class = Class19.smethod_4();
        @class.enum2_0 = Class19.Enum2.const_2;
        @class.float_0 = (float)long_1;
        @class.bool_0 = true;
        @class.long_0 = long_1;
        return @class;
    }

    // Token: 0x060000DA RID: 218 RVA: 0x000028D5 File Offset: 0x00000AD5
    public static Class19 smethod_10(string string_1)
    {
        Class19 @class = Class19.smethod_4();
        @class.enum2_0 = Class19.Enum2.const_1;
        @class.string_0 = string_1;
        return @class;
    }

    // Token: 0x060000DB RID: 219 RVA: 0x000028EA File Offset: 0x00000AEA
    public static Class19 smethod_11(string string_1)
    {
        Class19 @class = Class19.smethod_4();
        @class.enum2_0 = Class19.Enum2.const_6;
        @class.string_0 = string_1;
        return @class;
    }

    // Token: 0x060000DC RID: 220 RVA: 0x000028FF File Offset: 0x00000AFF
    public static Class19 smethod_12(string string_1, int int_0 = -2, bool bool_2 = false, bool bool_3 = false)
    {
        Class19 @class = Class19.smethod_4();
        @class.method_4(string_1, int_0, bool_2, bool_3);
        return @class;
    }

    // Token: 0x060000DD RID: 221 RVA: 0x0000BB0C File Offset: 0x00009D0C
    static Class19 smethod_13(Class19.Delegate0 delegate0_0)
    {
        Class19 @class = Class19.smethod_4();
        delegate0_0(@class);
        return @class;
    }

    // Token: 0x060000DE RID: 222 RVA: 0x0000BB28 File Offset: 0x00009D28
    static Class19 smethod_14(Dictionary<string, string> dictionary_0)
    {
        Class19 @class = Class19.smethod_4();
        @class.enum2_0 = Class19.Enum2.const_3;
        @class.list_1 = new List<string>();
        @class.list_0 = new List<Class19>();
        foreach (KeyValuePair<string, string> keyValuePair in dictionary_0)
        {
            @class.list_1.Add(keyValuePair.Key);
            @class.list_0.Add(Class19.smethod_10(keyValuePair.Value));
        }
        return @class;
    }

    // Token: 0x060000DF RID: 223 RVA: 0x000023C6 File Offset: 0x000005C6
    Class19()
    {


    }

    // Token: 0x060000E0 RID: 224 RVA: 0x00002910 File Offset: 0x00000B10
    public Class19(string string_1, int int_0 = -2, bool bool_2 = false, bool bool_3 = false)
    {


        this.method_4(string_1, int_0, bool_2, bool_3);
    }

    // Token: 0x060000E1 RID: 225 RVA: 0x0000BBC0 File Offset: 0x00009DC0
    void method_4(string string_1, int int_0 = -2, bool bool_2 = false, bool bool_3 = false)
    {
        if (string.IsNullOrEmpty(string_1))
        {
            this.enum2_0 = Class19.Enum2.const_0;
            return;
        }
        string_1 = string_1.Trim(Class19.char_0);
        if (bool_3 && string_1[0] != '[' && string_1[0] != '{')
        {
            this.enum2_0 = Class19.Enum2.const_0;
            return;
        }
        if (string_1.Length <= 0)
        {
            this.enum2_0 = Class19.Enum2.const_0;
            return;
        }
        if (string.Compare(string_1, "true", true) == 0)
        {
            this.enum2_0 = Class19.Enum2.const_5;
            this.bool_1 = true;
            return;
        }
        if (string.Compare(string_1, "false", true) == 0)
        {
            this.enum2_0 = Class19.Enum2.const_5;
            this.bool_1 = false;
            return;
        }
        if (string.Compare(string_1, "null", true) == 0)
        {
            this.enum2_0 = Class19.Enum2.const_0;
            return;
        }
        if (string_1 == "\"INFINITY\"")
        {
            this.enum2_0 = Class19.Enum2.const_2;
            this.float_0 = float.PositiveInfinity;
            return;
        }
        if (string_1 == "\"NEGINFINITY\"")
        {
            this.enum2_0 = Class19.Enum2.const_2;
            this.float_0 = float.NegativeInfinity;
            return;
        }
        if (string_1 == "\"NaN\"")
        {
            this.enum2_0 = Class19.Enum2.const_2;
            this.float_0 = float.NaN;
            return;
        }
        if (string_1[0] == '"')
        {
            this.enum2_0 = Class19.Enum2.const_1;
            this.string_0 = string_1.Substring(1, string_1.Length - 2);
            return;
        }
        int num = 1;
        int num2 = 0;
        char c = string_1[0];
        if (c != '[')
        {
            if (c != '{')
            {
                try
                {
                    this.float_0 = Convert.ToSingle(string_1);
                    if (!string_1.Contains("."))
                    {
                        this.long_0 = Convert.ToInt64(string_1);
                        this.bool_0 = true;
                    }
                    this.enum2_0 = Class19.Enum2.const_2;
                }
                catch (FormatException)
                {
                    this.enum2_0 = Class19.Enum2.const_0;
                }
                return;
            }
            this.enum2_0 = Class19.Enum2.const_3;
            this.list_1 = new List<string>();
            this.list_0 = new List<Class19>();
        }
        else
        {
            this.enum2_0 = Class19.Enum2.const_4;
            this.list_0 = new List<Class19>();
        }
        string item = "";
        bool flag = false;
        bool flag2 = false;
        int num3 = 0;
        while (++num2 < string_1.Length)
        {
            if (Array.IndexOf<char>(Class19.char_0, string_1[num2]) <= -1)
            {
                if (string_1[num2] == '\\')
                {
                    num2++;
                }
                else
                {
                    if (string_1[num2] == '"')
                    {
                        if (flag)
                        {
                            if (!flag2 && num3 == 0 && this.enum2_0 == Class19.Enum2.const_3)
                            {
                                item = string_1.Substring(num + 1, num2 - num - 1);
                            }
                            flag = false;
                        }
                        else
                        {
                            if (num3 == 0 && this.enum2_0 == Class19.Enum2.const_3)
                            {
                                num = num2;
                            }
                            flag = true;
                        }
                    }
                    if (!flag)
                    {
                        if (this.enum2_0 == Class19.Enum2.const_3 && num3 == 0 && string_1[num2] == ':')
                        {
                            num = num2 + 1;
                            flag2 = true;
                        }
                        if (string_1[num2] == '[')
                        {
                            goto IL_285;
                        }
                        if (string_1[num2] == '{')
                        {
                            goto IL_285;
                        }
                        if (string_1[num2] == ']' || string_1[num2] == '}')
                        {
                            num3--;
                        }
                    IL_28B:
                        if ((string_1[num2] == ',' && num3 == 0) || num3 < 0)
                        {
                            flag2 = false;
                            string text = string_1.Substring(num, num2 - num).Trim(Class19.char_0);
                            if (text.Length > 0)
                            {
                                if (this.enum2_0 == Class19.Enum2.const_3)
                                {
                                    this.list_1.Add(item);
                                }
                                if (int_0 != -1)
                                {
                                    this.list_0.Add(Class19.smethod_12(text, (int_0 < -1) ? -2 : (int_0 - 1), false, false));
                                }
                                else if (bool_2)
                                {
                                    this.list_0.Add(Class19.smethod_11(text));
                                }
                            }
                            num = num2 + 1;
                            continue;
                        }
                        continue;
                    IL_285:
                        num3++;
                        goto IL_28B;
                    }
                }
            }
        }
    }

    // Token: 0x060000E2 RID: 226 RVA: 0x00002928 File Offset: 0x00000B28
    bool method_5()
    {
        return this.enum2_0 == Class19.Enum2.const_2;
    }

    // Token: 0x060000E3 RID: 227 RVA: 0x00002933 File Offset: 0x00000B33
    bool method_6()
    {
        return this.enum2_0 == Class19.Enum2.const_0;
    }

    // Token: 0x060000E4 RID: 228 RVA: 0x0000293E File Offset: 0x00000B3E
    bool method_7()
    {
        return this.enum2_0 == Class19.Enum2.const_1;
    }

    // Token: 0x060000E5 RID: 229 RVA: 0x00002949 File Offset: 0x00000B49
    bool method_8()
    {
        return this.enum2_0 == Class19.Enum2.const_5;
    }

    // Token: 0x060000E6 RID: 230 RVA: 0x00002954 File Offset: 0x00000B54
    bool method_9()
    {
        return this.enum2_0 == Class19.Enum2.const_4;
    }

    // Token: 0x060000E7 RID: 231 RVA: 0x0000295F File Offset: 0x00000B5F
    bool method_10()
    {
        return this.enum2_0 == Class19.Enum2.const_3 || this.enum2_0 == Class19.Enum2.const_6;
    }

    // Token: 0x060000E8 RID: 232 RVA: 0x00002975 File Offset: 0x00000B75
    public void method_11(bool bool_2)
    {
        this.method_16(Class19.smethod_6(bool_2));
    }

    // Token: 0x060000E9 RID: 233 RVA: 0x00002983 File Offset: 0x00000B83
    public void method_12(float float_1)
    {
        this.method_16(Class19.smethod_7(float_1));
    }

    // Token: 0x060000EA RID: 234 RVA: 0x00002991 File Offset: 0x00000B91
    public void method_13(int int_0)
    {
        this.method_16(Class19.smethod_8(int_0));
    }

    // Token: 0x060000EB RID: 235 RVA: 0x0000299F File Offset: 0x00000B9F
    public void method_14(string string_1)
    {
        this.method_16(Class19.smethod_10(string_1));
    }

    // Token: 0x060000EC RID: 236 RVA: 0x000029AD File Offset: 0x00000BAD
    void method_15(Class19.Delegate0 delegate0_0)
    {
        this.method_16(Class19.smethod_13(delegate0_0));
    }

    // Token: 0x060000ED RID: 237 RVA: 0x000029BB File Offset: 0x00000BBB
    public void method_16(Class19 class19_0)
    {
        if (Class19.smethod_16(class19_0))
        {
            if (this.enum2_0 != Class19.Enum2.const_4)
            {
                this.enum2_0 = Class19.Enum2.const_4;
                if (this.list_0 == null)
                {
                    this.list_0 = new List<Class19>();
                }
            }
            this.list_0.Add(class19_0);
        }
    }

    // Token: 0x060000EE RID: 238 RVA: 0x000029F4 File Offset: 0x00000BF4
    public void method_17(string string_1, bool bool_2)
    {
        this.method_23(string_1, Class19.smethod_6(bool_2));
    }

    // Token: 0x060000EF RID: 239 RVA: 0x00002A03 File Offset: 0x00000C03
    public void method_18(string string_1, float float_1)
    {
        this.method_23(string_1, Class19.smethod_7(float_1));
    }

    // Token: 0x060000F0 RID: 240 RVA: 0x00002A12 File Offset: 0x00000C12
    public void method_19(string string_1, int int_0)
    {
        this.method_23(string_1, Class19.smethod_8(int_0));
    }

    // Token: 0x060000F1 RID: 241 RVA: 0x00002A21 File Offset: 0x00000C21
    void method_20(string string_1, long long_1)
    {
        this.method_23(string_1, Class19.smethod_9(long_1));
    }

    // Token: 0x060000F2 RID: 242 RVA: 0x00002A30 File Offset: 0x00000C30
    void method_21(string string_1, Class19.Delegate0 delegate0_0)
    {
        this.method_23(string_1, Class19.smethod_13(delegate0_0));
    }

    // Token: 0x060000F3 RID: 243 RVA: 0x00002A3F File Offset: 0x00000C3F
    public void method_22(string string_1, string string_2)
    {
        this.method_23(string_1, Class19.smethod_10(string_2));
    }

    // Token: 0x060000F4 RID: 244 RVA: 0x0000BF14 File Offset: 0x0000A114
    public void method_23(string string_1, Class19 class19_0)
    {
        if (Class19.smethod_16(class19_0))
        {
            if (this.enum2_0 != Class19.Enum2.const_3)
            {
                if (this.list_1 == null)
                {
                    this.list_1 = new List<string>();
                }
                if (this.enum2_0 == Class19.Enum2.const_4)
                {
                    for (int i = 0; i < this.list_0.Count; i++)
                    {
                        this.list_1.Add(string.Concat(i));
                    }
                }
                else if (this.list_0 == null)
                {
                    this.list_0 = new List<Class19>();
                }
                this.enum2_0 = Class19.Enum2.const_3;
            }
            this.list_1.Add(string_1);
            this.list_0.Add(class19_0);
        }
    }

    // Token: 0x060000F5 RID: 245 RVA: 0x00002A4E File Offset: 0x00000C4E
    public void method_24(string string_1, string string_2)
    {
        this.method_28(string_1, Class19.smethod_10(string_2));
    }

    // Token: 0x060000F6 RID: 246 RVA: 0x00002A5D File Offset: 0x00000C5D
    void method_25(string string_1, bool bool_2)
    {
        this.method_28(string_1, Class19.smethod_6(bool_2));
    }

    // Token: 0x060000F7 RID: 247 RVA: 0x00002A6C File Offset: 0x00000C6C
    void method_26(string string_1, float float_1)
    {
        this.method_28(string_1, Class19.smethod_7(float_1));
    }

    // Token: 0x060000F8 RID: 248 RVA: 0x00002A7B File Offset: 0x00000C7B
    void method_27(string string_1, int int_0)
    {
        this.method_28(string_1, Class19.smethod_8(int_0));
    }

    // Token: 0x060000F9 RID: 249 RVA: 0x00002A8A File Offset: 0x00000C8A
    void method_28(string string_1, Class19 class19_0)
    {
        if (this.method_45(string_1))
        {
            this.list_0.Remove(this.method_57(string_1));
            this.list_1.Remove(string_1);
        }
        this.method_23(string_1, class19_0);
    }

    // Token: 0x060000FA RID: 250 RVA: 0x00002ABD File Offset: 0x00000CBD
    void method_29(string string_1)
    {
        if (this.list_1.IndexOf(string_1) > -1)
        {
            this.list_0.RemoveAt(this.list_1.IndexOf(string_1));
            this.list_1.Remove(string_1);
        }
    }

    // Token: 0x060000FB RID: 251 RVA: 0x00002AF2 File Offset: 0x00000CF2
    bool method_30(out bool bool_2, string string_1, bool bool_3)
    {
        bool_2 = bool_3;
        return this.method_31(ref bool_2, string_1, null);
    }

    // Token: 0x060000FC RID: 252 RVA: 0x0000BFB4 File Offset: 0x0000A1B4
    bool method_31(ref bool bool_2, string string_1, Class19.Delegate1 delegate1_0 = null)
    {
        if (this.enum2_0 == Class19.Enum2.const_3)
        {
            int num = this.list_1.IndexOf(string_1);
            if (num >= 0)
            {
                bool_2 = this.list_0[num].bool_1;
                return true;
            }
        }
        if (delegate1_0 != null)
        {
            delegate1_0(string_1);
        }
        return false;
    }

    // Token: 0x060000FD RID: 253 RVA: 0x00002B00 File Offset: 0x00000D00
    bool method_32(out float float_1, string string_1, float float_2)
    {
        float_1 = float_2;
        return this.method_33(ref float_1, string_1, null);
    }

    // Token: 0x060000FE RID: 254 RVA: 0x0000BFFC File Offset: 0x0000A1FC
    bool method_33(ref float float_1, string string_1, Class19.Delegate1 delegate1_0 = null)
    {
        if (this.enum2_0 == Class19.Enum2.const_3)
        {
            int num = this.list_1.IndexOf(string_1);
            if (num >= 0)
            {
                float_1 = this.list_0[num].float_0;
                return true;
            }
        }
        if (delegate1_0 != null)
        {
            delegate1_0(string_1);
        }
        return false;
    }

    // Token: 0x060000FF RID: 255 RVA: 0x00002B0E File Offset: 0x00000D0E
    bool method_34(out int int_0, string string_1, int int_1)
    {
        int_0 = int_1;
        return this.method_35(ref int_0, string_1, null);
    }

    // Token: 0x06000100 RID: 256 RVA: 0x0000C044 File Offset: 0x0000A244
    bool method_35(ref int int_0, string string_1, Class19.Delegate1 delegate1_0 = null)
    {
        if (this.method_10())
        {
            int num = this.list_1.IndexOf(string_1);
            if (num >= 0)
            {
                int_0 = (int)this.list_0[num].float_0;
                return true;
            }
        }
        if (delegate1_0 != null)
        {
            delegate1_0(string_1);
        }
        return false;
    }

    // Token: 0x06000101 RID: 257 RVA: 0x00002B1C File Offset: 0x00000D1C
    bool method_36(out long long_1, string string_1, long long_2)
    {
        long_1 = long_2;
        return this.method_37(ref long_1, string_1, null);
    }

    // Token: 0x06000102 RID: 258 RVA: 0x0000C08C File Offset: 0x0000A28C
    bool method_37(ref long long_1, string string_1, Class19.Delegate1 delegate1_0 = null)
    {
        if (this.method_10())
        {
            int num = this.list_1.IndexOf(string_1);
            if (num >= 0)
            {
                long_1 = (long)this.list_0[num].float_0;
                return true;
            }
        }
        if (delegate1_0 != null)
        {
            delegate1_0(string_1);
        }
        return false;
    }

    // Token: 0x06000103 RID: 259 RVA: 0x00002B2A File Offset: 0x00000D2A
    bool method_38(out uint uint_0, string string_1, uint uint_1)
    {
        uint_0 = uint_1;
        return this.method_39(ref uint_0, string_1, null);
    }

    // Token: 0x06000104 RID: 260 RVA: 0x0000C0D4 File Offset: 0x0000A2D4
    bool method_39(ref uint uint_0, string string_1, Class19.Delegate1 delegate1_0 = null)
    {
        if (this.method_10())
        {
            int num = this.list_1.IndexOf(string_1);
            if (num >= 0)
            {
                uint_0 = (uint)this.list_0[num].float_0;
                return true;
            }
        }
        if (delegate1_0 != null)
        {
            delegate1_0(string_1);
        }
        return false;
    }

    // Token: 0x06000105 RID: 261 RVA: 0x00002B38 File Offset: 0x00000D38
    bool method_40(out string string_1, string string_2, string string_3)
    {
        string_1 = string_3;
        return this.method_41(ref string_1, string_2, null);
    }

    // Token: 0x06000106 RID: 262 RVA: 0x0000C11C File Offset: 0x0000A31C
    bool method_41(ref string string_1, string string_2, Class19.Delegate1 delegate1_0 = null)
    {
        if (this.method_10())
        {
            int num = this.list_1.IndexOf(string_2);
            if (num >= 0)
            {
                string_1 = this.list_0[num].string_0;
                return true;
            }
        }
        if (delegate1_0 != null)
        {
            delegate1_0(string_2);
        }
        return false;
    }

    // Token: 0x06000107 RID: 263 RVA: 0x0000C164 File Offset: 0x0000A364
    void method_42(string string_1, Class19.Delegate2 delegate2_0, Class19.Delegate1 delegate1_0 = null)
    {
        if (delegate2_0 != null && this.method_10())
        {
            int num = this.list_1.IndexOf(string_1);
            if (num >= 0)
            {
                delegate2_0(this.list_0[num]);
                return;
            }
        }
        if (delegate1_0 != null)
        {
            delegate1_0(string_1);
        }
    }

    // Token: 0x06000108 RID: 264 RVA: 0x0000C1AC File Offset: 0x0000A3AC
    public Class19 method_43(string string_1)
    {
        if (this.method_10())
        {
            for (int i = 0; i < this.list_1.Count; i++)
            {
                if (this.list_1[i] == string_1)
                {
                    return this.list_0[i];
                }
            }
        }
        return null;
    }

    // Token: 0x06000109 RID: 265 RVA: 0x0000C1FC File Offset: 0x0000A3FC
    bool method_44(string[] string_1)
    {
        if (!this.method_10())
        {
            return false;
        }
        for (int i = 0; i < string_1.Length; i++)
        {
            if (!this.list_1.Contains(string_1[i]))
            {
                return false;
            }
        }
        return true;
    }

    // Token: 0x0600010A RID: 266 RVA: 0x0000C234 File Offset: 0x0000A434
    bool method_45(string string_1)
    {
        if (!this.method_10())
        {
            return false;
        }
        for (int i = 0; i < this.list_1.Count; i++)
        {
            if (this.list_1[i] == string_1)
            {
                return true;
            }
        }
        return false;
    }

    // Token: 0x0600010B RID: 267 RVA: 0x0000C278 File Offset: 0x0000A478
    public void method_46()
    {
        this.enum2_0 = Class19.Enum2.const_0;
        if (this.list_0 != null)
        {
            this.list_0.Clear();
        }
        if (this.list_1 != null)
        {
            this.list_1.Clear();
        }
        this.string_0 = "";
        this.float_0 = 0f;
        this.bool_1 = false;
    }

    // Token: 0x0600010C RID: 268 RVA: 0x00002B46 File Offset: 0x00000D46
    Class19 method_47()
    {
        return Class19.smethod_12(this.method_51(true), -2, false, false);
    }

    // Token: 0x0600010D RID: 269 RVA: 0x00002B58 File Offset: 0x00000D58
    void method_48(Class19 class19_0)
    {
        Class19.smethod_15(this, class19_0);
    }

    // Token: 0x0600010E RID: 270 RVA: 0x0000C2D0 File Offset: 0x0000A4D0
    static void smethod_15(Class19 class19_0, Class19 class19_1)
    {
        if (class19_0.enum2_0 == Class19.Enum2.const_0)
        {
            class19_0.method_3(class19_1);
            return;
        }
        if (class19_0.enum2_0 == Class19.Enum2.const_3 && class19_1.enum2_0 == Class19.Enum2.const_3)
        {
            for (int i = 0; i < class19_1.list_0.Count; i++)
            {
                string string_ = class19_1.list_1[i];
                if (class19_1.method_55(i).method_0())
                {
                    if (class19_0.method_45(string_))
                    {
                        Class19.smethod_15(class19_0.method_57(string_), class19_1.method_55(i));
                    }
                    else
                    {
                        class19_0.method_23(string_, class19_1.method_55(i));
                    }
                }
                else if (class19_0.method_45(string_))
                {
                    class19_0.method_28(string_, class19_1.method_55(i));
                }
                else
                {
                    class19_0.method_23(string_, class19_1.method_55(i));
                }
            }
            return;
        }
        if (class19_0.enum2_0 == Class19.Enum2.const_4 && class19_1.enum2_0 == Class19.Enum2.const_4)
        {
            if (class19_1.method_1() > class19_0.method_1())
            {
                return;
            }
            for (int j = 0; j < class19_1.list_0.Count; j++)
            {
                if (class19_0.method_55(j).enum2_0 == class19_1.method_55(j).enum2_0)
                {
                    if (class19_0.method_55(j).method_0())
                    {
                        Class19.smethod_15(class19_0.method_55(j), class19_1.method_55(j));
                    }
                    else
                    {
                        class19_0.method_56(j, class19_1.method_55(j));
                    }
                }
            }
        }
    }

    // Token: 0x0600010F RID: 271 RVA: 0x00002B61 File Offset: 0x00000D61
    void method_49()
    {
        if (this.enum2_0 != Class19.Enum2.const_6)
        {
            this.string_0 = this.method_51(true);
            this.enum2_0 = Class19.Enum2.const_6;
        }
    }

    // Token: 0x06000110 RID: 272 RVA: 0x00002B80 File Offset: 0x00000D80
    IEnumerable method_50()
    {
        IEnumerator<string> enumerator = null;
        while (true)
        {
            string text;
            try
            {
                if (this.enum2_0 == Class19.Enum2.const_6)
                {
                    goto IL_9D;
                }
                enumerator = this.method_52(false).GetEnumerator();
                while (enumerator.MoveNext())
                {
                    text = enumerator.Current;
                    if (text == null)
                    {
                        goto IL_8B;
                    }
                    this.string_0 = text;
                }
                break;
            }
            finally
            {
                if (enumerator != null)
                {
                    enumerator.Dispose();
                }
            }
        IL_8B:
            yield return text;
        }
        enumerator = null;
        this.enum2_0 = Class19.Enum2.const_6;
    IL_9D:
        yield break;
    }

    // Token: 0x06000111 RID: 273 RVA: 0x0000C414 File Offset: 0x0000A614
    public string method_51(bool bool_2 = true)
    {
        StringBuilder stringBuilder = new StringBuilder();
        this.method_54(0, stringBuilder, bool_2);
        return stringBuilder.ToString();
    }

    // Token: 0x06000112 RID: 274 RVA: 0x00002B90 File Offset: 0x00000D90
    IEnumerable<string> method_52(bool bool_2 = false)
    {
        StringBuilder stringBuilder = new StringBuilder();
        Class19.stopwatch_0.Reset();
        Class19.stopwatch_0.Start();
        IEnumerator enumerator = this.method_53(0, stringBuilder, bool_2).GetEnumerator();
        while (true)
        {
            try
            {
                if (!enumerator.MoveNext())
                {
                    break;
                }
                goto IL_B3;
            }
            finally
            {
                IDisposable disposable = enumerator as IDisposable;
                if (disposable != null)
                {
                    disposable.Dispose();
                }
            }
        IL_B3:
            IEnumerable enumerable = (IEnumerable)enumerator.Current;
            yield return null;
        }
        enumerator = null;
        yield return stringBuilder.ToString();
        yield break;
    }

    // Token: 0x06000113 RID: 275 RVA: 0x00002BA7 File Offset: 0x00000DA7
    IEnumerable method_53(int int_0, StringBuilder stringBuilder_0, bool bool_2 = false)
    {
        Class19.Class22 @class = new Class19.Class22(-2);
        @class.class19_0 = this;
        @class.int_3 = int_0;
        @class.stringBuilder_1 = stringBuilder_0;
        @class.bool_1 = bool_2;
        return @class;
    }

    // Token: 0x06000114 RID: 276 RVA: 0x0000C438 File Offset: 0x0000A638
    void method_54(int int_0, StringBuilder stringBuilder_0, bool bool_2 = true)
    {
        if (int_0++ > 100)
        {
            return;
        }
        switch (this.enum2_0)
        {
            case Class19.Enum2.const_0:
                stringBuilder_0.Append("null");
                return;
            case Class19.Enum2.const_1:
                stringBuilder_0.AppendFormat("\"{0}\"", this.string_0);
                return;
            case Class19.Enum2.const_2:
                if (this.bool_0)
                {
                    stringBuilder_0.Append(this.long_0.ToString());
                    return;
                }
                if (float.IsInfinity(this.float_0))
                {
                    stringBuilder_0.Append("\"INFINITY\"");
                    return;
                }
                if (float.IsNegativeInfinity(this.float_0))
                {
                    stringBuilder_0.Append("\"NEGINFINITY\"");
                    return;
                }
                if (float.IsNaN(this.float_0))
                {
                    stringBuilder_0.Append("\"NaN\"");
                    return;
                }
                stringBuilder_0.Append(this.float_0.ToString());
                return;
            case Class19.Enum2.const_3:
                stringBuilder_0.Append("{");
                if (this.list_0.Count > 0)
                {
                    if (bool_2)
                    {
                        stringBuilder_0.Append("\n");
                    }
                    for (int i = 0; i < this.list_0.Count; i++)
                    {
                        string arg = this.list_1[i];
                        Class19 @class = this.list_0[i];
                        if (Class19.smethod_16(@class))
                        {
                            if (bool_2)
                            {
                                for (int j = 0; j < int_0; j++)
                                {
                                    stringBuilder_0.Append("\t");
                                }
                            }
                            stringBuilder_0.AppendFormat("\"{0}\":", arg);
                            @class.method_54(int_0, stringBuilder_0, bool_2);
                            stringBuilder_0.Append(",");
                            if (bool_2)
                            {
                                stringBuilder_0.Append("\n");
                            }
                        }
                    }
                    if (bool_2)
                    {
                        stringBuilder_0.Length -= 2;
                    }
                    else
                    {
                        int length = stringBuilder_0.Length;
                        stringBuilder_0.Length = length - 1;
                    }
                }
                if (bool_2 && this.list_0.Count > 0)
                {
                    stringBuilder_0.Append("\n");
                    for (int k = 0; k < int_0 - 1; k++)
                    {
                        stringBuilder_0.Append("\t");
                    }
                }
                stringBuilder_0.Append("}");
                return;
            case Class19.Enum2.const_4:
                stringBuilder_0.Append("[");
                if (this.list_0.Count > 0)
                {
                    if (bool_2)
                    {
                        stringBuilder_0.Append("\n");
                    }
                    for (int l = 0; l < this.list_0.Count; l++)
                    {
                        if (Class19.smethod_16(this.list_0[l]))
                        {
                            if (bool_2)
                            {
                                for (int m = 0; m < int_0; m++)
                                {
                                    stringBuilder_0.Append("\t");
                                }
                            }
                            this.list_0[l].method_54(int_0, stringBuilder_0, bool_2);
                            stringBuilder_0.Append(",");
                            if (bool_2)
                            {
                                stringBuilder_0.Append("\n");
                            }
                        }
                    }
                    if (bool_2)
                    {
                        stringBuilder_0.Length -= 2;
                    }
                    else
                    {
                        int length = stringBuilder_0.Length;
                        stringBuilder_0.Length = length - 1;
                    }
                }
                if (bool_2 && this.list_0.Count > 0)
                {
                    stringBuilder_0.Append("\n");
                    for (int n = 0; n < int_0 - 1; n++)
                    {
                        stringBuilder_0.Append("\t");
                    }
                }
                stringBuilder_0.Append("]");
                return;
            case Class19.Enum2.const_5:
                if (this.bool_1)
                {
                    stringBuilder_0.Append("true");
                    return;
                }
                stringBuilder_0.Append("false");
                return;
            case Class19.Enum2.const_6:
                stringBuilder_0.Append(this.string_0);
                return;
            default:
                return;
        }
    }

    // Token: 0x06000115 RID: 277 RVA: 0x00002BCC File Offset: 0x00000DCC
    public Class19 method_55(int int_0)
    {
        if (this.list_0.Count > int_0)
        {
            return this.list_0[int_0];
        }
        return null;
    }

    // Token: 0x06000116 RID: 278 RVA: 0x00002BEA File Offset: 0x00000DEA
    public void method_56(int int_0, Class19 class19_0)
    {
        if (this.list_0.Count > int_0)
        {
            this.list_0[int_0] = class19_0;
        }
    }

    // Token: 0x06000117 RID: 279 RVA: 0x00002C07 File Offset: 0x00000E07
    public Class19 method_57(string string_1)
    {
        return this.method_43(string_1);
    }

    // Token: 0x06000118 RID: 280 RVA: 0x00002C10 File Offset: 0x00000E10
    public void method_58(string string_1, Class19 class19_0)
    {
        this.method_28(string_1, class19_0);
    }

    // Token: 0x06000119 RID: 281 RVA: 0x00002C1A File Offset: 0x00000E1A
    public override string ToString()
    {
        return this.method_51(true);
    }

    // Token: 0x0600011A RID: 282 RVA: 0x00002C23 File Offset: 0x00000E23
    string method_59(bool bool_2)
    {
        return this.method_51(bool_2);
    }

    // Token: 0x0600011B RID: 283 RVA: 0x0000C780 File Offset: 0x0000A980
    Dictionary<string, string> method_60()
    {
        if (this.enum2_0 == Class19.Enum2.const_3)
        {
            Dictionary<string, string> dictionary = new Dictionary<string, string>();
            for (int i = 0; i < this.list_0.Count; i++)
            {
                Class19 @class = this.list_0[i];
                switch (@class.enum2_0)
                {
                    case Class19.Enum2.const_1:
                        dictionary.Add(this.list_1[i], @class.string_0);
                        break;
                    case Class19.Enum2.const_2:
                        dictionary.Add(this.list_1[i], string.Concat(@class.float_0));
                        break;
                    case Class19.Enum2.const_5:
                        dictionary.Add(this.list_1[i], @class.bool_1.ToString() ?? "");
                        break;
                }
            }
            return dictionary;
        }
        return null;
    }

    // Token: 0x0600011C RID: 284 RVA: 0x00002C2C File Offset: 0x00000E2C
    public static bool smethod_16(Class19 class19_0)
    {
        return class19_0 != null;
    }

    // Token: 0x0600011D RID: 285 RVA: 0x00002C32 File Offset: 0x00000E32
    // Note: this type is marked as 'beforefieldinit'.
    static Class19()
    {

        Class19.char_0 = new char[]
        {
            ' ',
            '\r',
            '\n',
            '\t',
            '﻿',
            '\t'
        };
        Class19.stopwatch_0 = new Stopwatch();
    }

    // Token: 0x04000155 RID: 341
    static readonly char[] char_0;

    // Token: 0x04000156 RID: 342
    Class19.Enum2 enum2_0;

    // Token: 0x04000157 RID: 343
    List<Class19> list_0;

    // Token: 0x04000158 RID: 344
    public List<string> list_1;

    // Token: 0x04000159 RID: 345
    public string string_0;

    // Token: 0x0400015A RID: 346
    public float float_0;

    // Token: 0x0400015B RID: 347
    bool bool_0;

    // Token: 0x0400015C RID: 348
    public long long_0;

    // Token: 0x0400015D RID: 349
    public bool bool_1;

    // Token: 0x0400015E RID: 350
    static readonly Stopwatch stopwatch_0;
}
