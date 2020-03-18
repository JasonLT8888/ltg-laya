export default class MathEx {

    public static Deg2Rad = 0.0175;
    public static Rad2Deg = 57.2958;

    public static ToHex(num: number): string {
        return num.toString(16);
    }

    public static RandomFromArray<T>(numArr: T[]): T {
        var randomIndex = MathEx.RandomInt(0, numArr.length);
        return numArr[randomIndex];
    }

    public static RandomFromWithWeight(numArr: number[], weightArr: number[]) {
        if (numArr == null || numArr.length == 0) {
            return null;
        }
        var totalWeight = 0;
        for (var weight of weightArr) {
            totalWeight += weight;
        }
        var randomWeight = MathEx.Random(0, totalWeight);
        var currentWeight = 0;
        for (var i = 0; i < numArr.length; ++i) {
            currentWeight += weightArr[i];
            if (randomWeight < currentWeight) {
                return numArr[i];
            }
        }
        return numArr[numArr.length - 1];
    }

    public static RandomInt(min: number, max: number): number {
        return Math.floor(this.Random(min, max));
    }

    public static Random(min: number, max: number): number {
        return (max - min) * Math.random() + min;
    }

    public static Clamp(value: number, min: number, max: number): number {
        if (value < min) return min;
        if (value > max) return max;
        return value;
    }

    public static Clamp01(value: number): number {
        return this.Clamp(value, 0, 1);
    }

    public static Sign(value: number): number {
        if (value == 0) return 1;
        return value > 0 ? 1 : -1;
    }

    public static GetNumCount(num: number): number {
        var numberCount = 0;
        var newNumber = num;
        while (newNumber / 10 > 0) {
            newNumber = Math.floor(newNumber / 10);
            numberCount++;
        }
        return numberCount;
    }

    public static Lerp(from: number, to: number, progress: number): number {
        return from + (to - from) * progress;
    }

    public static MoveTowardsAngle(current: number, target: number, maxDelta: number) {
        var num = MathEx.DeltaAngle(current, target);
        if (0 - maxDelta < num && num < maxDelta) {
            return target;
        }
        target = current + num;
        return MathEx.MoveTowards(current, target, maxDelta);
    }

    public static MoveTowards(current: number, target: number, maxDelta: number): number {
        if (Math.abs(target - current) <= maxDelta) {
            return target;
        }
        return current + Math.sign(target - current) * maxDelta;
    }

    public static DeltaAngle(current: number, target: number): number {
        var num = MathEx.Repeat(target - current, 360);
        if (num > 180) {
            num -= 360;
        }
        return num;
    }

    public static Repeat(t: number, length: number): number {
        return MathEx.Clamp(t - Math.floor(t / length) * length, 0, length);
    }

    public static IsSimilar(n1 : number, n2 : number) {
        return n1 == n2;
    }

}