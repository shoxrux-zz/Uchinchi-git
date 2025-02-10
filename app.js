function updateclock() {
   const yuq = new Date()
   const hour = yuq.getHours().toString().padStart(1,0)
   const minute = yuq.getMinutes().toString().padStart(1,0)
   const second = yuq.getSeconds().toString().padStart(1,0)

      const timer = `${hour}:${minute}:${second}`  
      document.getElementById("clock").textContent=timer 
}

updateclock()
setInterval(updateclock)