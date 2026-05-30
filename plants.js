/* WaterSquared — shared mock plant dataset.
   One source of truth for the Plant List, Detail, and Forecasts pages.
   Realistic synthetic values; swap for live SCADA later. */
window.WS_ORDER = ["CL-07","GT-01","KW-04","LD-12","BR-03","DF-09"];

window.WS_PLANTS = {
  "CL-07": {
    id:"CL-07", name:"Clarkson WWTP", city:"Mississauga, ON", type:"Municipal WWTP", status:"Optimal",
    yield:842, yieldDelta:"+2.4%", temp:"38.2", tempNote:"Stable", storage:72, power:"1.2",
    rec:{ text:"Increase feedstock organic loading rate by 5% over the next 6 hours to capitalize on the peak demand window.", impact:"+42 m³/h", confidence:"88%" },
    params:[
      { p:"Feed Rate", v:"14.2 m³/h", s:"14.0 m³/h", st:"Normal" },
      { p:"pH Level", v:"7.2", s:"7.0 – 7.5", st:"Normal" },
      { p:"H₂S Concentration", v:"450 ppm", s:"< 500 ppm", st:"Warning" },
      { p:"Biogas Quality (CH₄%)", v:"62.4%", s:"> 60.0%", st:"Normal" }
    ],
    impact:{ scenario:"+6.2%", energy:47, money:4200, ghg:18, homes:1400, cars:4 }
  },
  "GT-01": {
    id:"GT-01", name:"London Ashbridges WWTP", city:"London, ON", type:"Municipal WWTP", status:"Optimal",
    yield:910, yieldDelta:"+3.1%", temp:"37.8", tempNote:"Stable", storage:64, power:"3.1",
    rec:{ text:"Flare optimization opportunity: redirect 8% of flared gas to CHP during the evening demand peak.", impact:"+61 m³/h", confidence:"84%" },
    params:[
      { p:"Feed Rate", v:"19.6 m³/h", s:"19.0 m³/h", st:"Normal" },
      { p:"pH Level", v:"7.3", s:"7.0 – 7.5", st:"Normal" },
      { p:"H₂S Concentration", v:"310 ppm", s:"< 500 ppm", st:"Normal" },
      { p:"Biogas Quality (CH₄%)", v:"64.1%", s:"> 60.0%", st:"Normal" }
    ],
    impact:{ scenario:"+5.0%", energy:60, money:5400, ghg:23, homes:1800, cars:5 }
  },
  "KW-04": {
    id:"KW-04", name:"Waterloo Regional", city:"Waterloo, ON", type:"Municipal WWTP", status:"Warning",
    yield:690, yieldDelta:"-1.8%", temp:"36.4", tempNote:"Below setpoint", storage:81, power:"2.4",
    rec:{ text:"Digester running 1.6°C below mesophilic setpoint. Raise heating loop output to recover ~5% yield.", impact:"+34 m³/h", confidence:"79%" },
    params:[
      { p:"Feed Rate", v:"15.1 m³/h", s:"15.0 m³/h", st:"Normal" },
      { p:"pH Level", v:"6.9", s:"7.0 – 7.5", st:"Warning" },
      { p:"H₂S Concentration", v:"420 ppm", s:"< 500 ppm", st:"Normal" },
      { p:"Digester Temp", v:"36.4 °C", s:"37.5 – 38.5 °C", st:"Warning" }
    ],
    impact:{ scenario:"+4.2%", energy:38, money:3400, ghg:15, homes:1150, cars:3 }
  },
  "LD-12": {
    id:"LD-12", name:"Hamilton Woodward", city:"Hamilton, ON", type:"Agricultural Digester", status:"Critical",
    yield:540, yieldDelta:"-4.5%", temp:"35.1", tempNote:"Unstable", storage:92, power:"1.8",
    rec:{ text:"Storage near capacity and pH dropping — reduce loading rate 10% and increase mixing to avoid souring.", impact:"Stabilize", confidence:"73%" },
    params:[
      { p:"Feed Rate", v:"12.8 m³/h", s:"12.0 m³/h", st:"Warning" },
      { p:"pH Level", v:"6.6", s:"7.0 – 7.5", st:"Critical" },
      { p:"H₂S Concentration", v:"610 ppm", s:"< 500 ppm", st:"Critical" },
      { p:"Gas Storage", v:"92 %", s:"< 85 %", st:"Warning" }
    ],
    impact:{ scenario:"+8.5%", energy:52, money:4700, ghg:20, homes:1560, cars:4 }
  },
  "BR-03": {
    id:"BR-03", name:"Brampton Digester", city:"Brampton, ON", type:"Agricultural Digester", status:"Optimal",
    yield:760, yieldDelta:"+1.9%", temp:"38.0", tempNote:"Stable", storage:58, power:"2.0",
    rec:{ text:"Co-digestion headroom available: add 6% food-waste feedstock to lift methane fraction.", impact:"+38 m³/h", confidence:"82%" },
    params:[
      { p:"Feed Rate", v:"16.4 m³/h", s:"16.0 m³/h", st:"Normal" },
      { p:"pH Level", v:"7.1", s:"7.0 – 7.5", st:"Normal" },
      { p:"H₂S Concentration", v:"360 ppm", s:"< 500 ppm", st:"Normal" },
      { p:"Biogas Quality (CH₄%)", v:"61.7%", s:"> 60.0%", st:"Normal" }
    ],
    impact:{ scenario:"+5.5%", energy:44, money:3960, ghg:17, homes:1320, cars:4 }
  },
  "DF-09": {
    id:"DF-09", name:"Durham Landfill Gas", city:"Durham, ON", type:"Landfill Gas", status:"Optimal",
    yield:1180, yieldDelta:"+2.0%", temp:"32.5", tempNote:"Ambient", storage:70, power:"3.7",
    rec:{ text:"Wellfield tuning: increase vacuum on the north cell to capture an estimated 7% more collected gas.", impact:"+82 m³/h", confidence:"81%" },
    params:[
      { p:"Collection Rate", v:"31.0 m³/h", s:"30.0 m³/h", st:"Normal" },
      { p:"O₂ Intrusion", v:"1.2 %", s:"< 2.0 %", st:"Normal" },
      { p:"H₂S Concentration", v:"480 ppm", s:"< 500 ppm", st:"Warning" },
      { p:"Biogas Quality (CH₄%)", v:"52.3%", s:"> 50.0%", st:"Normal" }
    ],
    impact:{ scenario:"+3.8%", energy:72, money:6500, ghg:28, homes:2160, cars:6 }
  }
};

/* helper: read ?id= from URL, fall back to Clarkson */
window.WS_currentId = function(){
  const id = new URLSearchParams(location.search).get("id");
  return (id && window.WS_PLANTS[id]) ? id : "CL-07";
};

/* helper: build the 9-point forecast (actual 24h solid + predicted 48h) from current yield */
window.WS_forecast = function(y){
  return {
    labels:["-24h","-18h","-12h","-6h","Now","+12h","+24h","+36h","+48h"],
    actual:[ Math.round(y*0.855), Math.round(y*0.905), Math.round(y*1.02), Math.round(y*1.06), y, null,null,null,null ],
    predicted:[ null,null,null,null, y, Math.round(y*0.94), Math.round(y*0.975), Math.round(y*1.02), Math.round(y*1.045) ]
  };
};
