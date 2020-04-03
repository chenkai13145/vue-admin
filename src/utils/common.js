// 时间戳格式化
export function dateTime(data){
      let times=new Date(data)
      let n=times.getFullYear()
      let y=times.getMonth()+1
      let r=times.getDate()
      let s=times.getHours()
      let f=times.getMinutes()
      let m=times.getSeconds()
      return `${n}-${y}-${r} ${s}:${f}:${m}`
}