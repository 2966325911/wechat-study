const Calendar = require('./Calendar.js')
const holidayData = require('./holiday.js')
let calendar = new Calendar()

function Helper() {
    this.weekItems = ['日', '一', '二', '三', '四', '五', '六']
    // monthItems: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
    this.monthCount = 0
    this.fisrtDay = 0
    this.currentDate = 0
    this.currentMonth = 0
    this.currentYear = 0
    this.selectedDate = null
    this.days = []
    this.title = ''
    this.lunarTitle = ''
}

Helper.prototype.getCountDays = function(date) {
    var month = date.getMonth();
    date.setMonth(month + 1);
    date.setDate(0);
    return date.getDate();
}

Helper.prototype.preMonth = function() {
    let {
        currentMonth,
        currentYear,
    } = this

    let now = new Date()

    if (currentMonth > 0) {
        currentMonth -= 1
    } else {
        currentMonth = 11
        currentYear -= 1
    }
    now.setMonth(currentMonth)
    now.setFullYear(currentYear)

    this.setup(now)
}

Helper.prototype.nextMonth = function() {
    let {
        currentMonth,
        currentYear,
    } = this

    let now = new Date()

    if (currentMonth < 11) {
        currentMonth += 1
    } else {
        currentMonth = 0
        currentYear += 1
    }
    now.setMonth(currentMonth)
    now.setFullYear(currentYear)

    this.setup(now)
}

Helper.prototype.setup = function(date) {
    let now = new Date()

    date.setDate(1)
    let fisrtDay = date.getDay() //0~6
    let monthCount = this.getCountDays(date)
    let currentMonth = date.getMonth() //0~11
    let currentYear = date.getFullYear()

    let currentDate = null
    if (now.getFullYear() == currentYear && now.getMonth() == currentMonth) {
        currentDate = now.getDate() - 1
    }
    this.setupLunarTitle(currentYear, currentMonth, currentDate)

    let days = []
    let obj = null
    for (let i = 0; i < monthCount; i++) {
        let res = calendar.solar(currentYear, currentMonth + 1, i + 1)
        let {
            animal,
            ganzhi_year,
            ganzhi_month,
            ganzhi_day,
            lunar_month_chinese,
            lunar_day_chinese,
            lunar_day
        } = res
        let json = {
            day: i + 1,
            isFisrt: lunar_day == 1,
            infos: [],
            style: 'normal'
        }
        days.push(Object.assign(json, {
            animal,
            ganzhi_year,
            ganzhi_month,
            ganzhi_day,
            lunar_month_chinese,
            lunar_day_chinese,
            lunar_day
        }))

        // 将当前日期的信息添加到infos数组里，显示的时候取第一个，如果要查看全部信息可以取出infos里的数据
        json.infos.unshift(lunar_day_chinese)
        if (json.isFisrt) {
            json.infos.unshift(lunar_month_chinese)
            json.style = 'first'
        }

        if (holidayData[currentYear] && holidayData[currentYear][currentMonth + 1] && holidayData[currentYear][currentMonth + 1][i + 1]) {
            // title = holidayData[currentMonth + 1][i + 1].title
            // json.infos.unshift(holidayData[currentMonth + 1][i + 1].title)
            // json.style = 'holiday'
            obj = holidayData[currentYear][currentMonth + 1][i + 1]
        }
        if (obj && obj.range[0] < i + 2 && obj.range[1] > i) {
            json.style = 'holiday'
            if (obj.at == i + 1) {
                json.infos.unshift(obj.title)
            }
            if (obj.range[1] == i + 1) {
                obj = null
            }
        }
    }

    Object.assign(this, {
        fisrtDay,
        monthCount,
        currentDate,
        currentMonth,
        currentYear,
        selectedDate: null,
        days
    })
}

Helper.prototype.setupLunarTitle = function(year, month, day) {
    let res = calendar.solar(year, month + 1, day + 1)

    let {
        animal,
        ganzhi_year,
        ganzhi_month,
        ganzhi_day,
        lunar_month_chinese,
        lunar_day_chinese
    } = res
    console.log(res)
    
    this.lunarTitle = `${lunar_month_chinese} ${lunar_day_chinese} ${ganzhi_year}年 【${animal}年】 ${ganzhi_month}月 ${ganzhi_day}日`
}

Helper.prototype.setupTitle = function() {
    this.title = this.currentYear + '-' + (this.currentMonth + 1) + '-' + (this.currentDate + 1)
}

module.exports = Helper