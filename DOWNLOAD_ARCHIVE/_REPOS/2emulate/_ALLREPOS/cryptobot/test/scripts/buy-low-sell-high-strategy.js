//@version=1
strategy("My Strategy", overlay=true)

longCondition = crossover(sma(close, 14), sma(close, 28))
if (longCondition)
    strategy.entry("My Long Entry Id", strategy.long)

shortCondition = crossunder(sma(close, 14), sma(close, 28))
if (shortCondition)
    strategy.entry("My Short Entry Id", strategy.short)



//////////////////


study("Volatility Stop", shorttitle = "VStop", overlay = true)

length = input(20)
mult = input(2)
atr_ = atr(length)
max1 = max(nz(max_[1]), close)
min1 = min(nz(min_[1]), close)
is_uptrend_prev = nz(is_uptrend[1], true)
stop = is_uptrend_prev ? max1 - mult * atr_ : min1 + mult * atr_
vstop_prev = nz(vstop[1])
vstop1 = is_uptrend_prev ? max(vstop_prev, stop) : min(vstop_prev, stop)
is_uptrend = close - vstop1 >= 0
is_trend_changed = is_uptrend != is_uptrend_prev
max_ = is_trend_changed ? close : max1
min_ = is_trend_changed ? close : min1
vstop = is_trend_changed ? is_uptrend ? max_ - mult * atr_ : min_ + mult * atr_ : vstop1

plot(vstop, color = is_uptrend ? green : red, style = cross, linewidth = 2, title = "vstop")


plot(lowest(low, 3), color =#A5D6A7, title = "low3")
plot(lowest(low, 7), color =#66BB6A, title = "low7")
plot(lowest(low, 12), color =#388E3C, linewidth = 2, title = "low12")

plot(highest(high, 3), color =#EF9A9A, title = "high3") // 200
plot(highest(high, 7), color =#F44336, title = "high7") // 600
plot(highest(high, 12), color =#C62828, linewidth = 2, title = "high12") // 800


////////////////////////


//@version=2
strategy("Daily Close Comparison Strategy (by ChartArt)", shorttitle = "weekly close", overlay = false, initial_capital = 750, commission_type = strategy.commission.percent, commission_value = 0.25)

threshold = input(title = "Price Difference Threshold", type = float, defval = 0, step = 0.001)

resolution = input('W') // D, W, #minutes; ohlc = 1D

getDiff() =>
yesterday = security(tickerid, resolution, close[1])
today = security(tickerid, resolution, close)
delta = today - yesterday
percentage = delta / yesterday

closeDiff = getDiff()

buying = closeDiff > threshold ? true : closeDiff < -threshold ? false : buying[1]

hline(0, title = "zero line")

bgcolor(buying ? green : red, transp = 90)

plot(closeDiff, color = silver, style = area, transp = 10)
plot(closeDiff, color = aqua, title = "prediction")

longCondition = buying
if (longCondition)
    strategy.entry("Buy", strategy.long)

shortCondition = buying != true
if (shortCondition)
    strategy.entry("Sell", strategy.short)