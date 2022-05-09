const core_courses = [
    {
      name: 'ICSI201',
    },
    {
      name: 'ICSI210',
      required: 'AMAT112',
    },
    {
      name: 'ICSI213',
      required: 'ICSI201',
    },
    {
      name: 'ICSI333',
      required: 'ICSI213',
    },
    {
      name: 'ICSI403',
      required: ['ICSI210', 'ICSI213'],
    },
    {
      name: 'ICSI404',
      required: 'ICSI333',
    },
    {
      name: 'ICSI409',
      required: 'ICSI311',
    },
  ]
  
  const lang_principle = [
    {
      name: 'ICSI311',
      required: ['ICSI210', 'ICSI213']
    }
  ]
  
  const soft_dev = [
    {
      name: 'ICSI499',
      required: ''
    }
  ]
  
  const social_aspects = [
    {
      name: 'ICSI300z'
    }
  ]
  
  const com_elective = [
    {
      name: 'ICSI401'
    },
    {
      name: 'ICSI407'
    },
    {
      name: 'ICSI410'
    },
    {
      name: 'ICSI412'
    },
    {
      name: 'ICSI416'
    },
    {
      name: 'ICSI417'
    },
    {
      name: 'ICSI418Y'
    },
    {
      name: 'ICSI421'
    },
    {
      name: 'ICSI422'
    },
    {
      name: 'ICSI424'
    },
    {
      name: 'ICSI426'
    },
    {
      name: 'ICSI431'
    },
    {
      name: 'ICSI432'
    },
    {
      name: 'ICSI433'
    },
    {
      name: 'ICSI435'
    },
    {
      name: 'ICSI445'
    },
    {
      name: 'ICSI451'
    }
  ]
  
  const math = [
    {
      name: 'AMAT111'
    }
  ]
  
  const physics = [
    {
      name: 'APHY140'
    },
    {
      name: 'APHY145'
    },
    {
      name: 'APHY150',
      required: 'APHY140'
    },
    {
      name: 'APHY155'
    }
  ]
  
  const option2 = [
    {
      name: 'bio101',
    },
  ]
  
  const all_courses = [core_courses, lang_principle, soft_dev, social_aspects, com_elective, math, physics, option2,]
  
  const taken_courses = ['ICSI201']
  
  //if you finished 3 computer science elective courses, you finished this section.
  if(com_elective.filter((z) => taken_courses.includes(z.name)).length >= 3){ 
    com_elective.length = 0;
  }
  
  const remaining_courses = [
    core_courses.filter((v) => !taken_courses.includes(v.name)),
    lang_principle.filter((w) => !taken_courses.includes(w.name)),
    soft_dev.filter((x) => !taken_courses.includes(x.name)),
    social_aspects.filter((y) => !taken_courses.includes(y.name)),
    com_elective.filter((z) => !taken_courses.includes(z.name)),
    math.filter((a) => !taken_courses.includes(a.name)),
    physics.filter((b) => !taken_courses.includes(b.name)),
    option2.filter((c) => !taken_courses.includes(c.name)),
  ]
  
  
  const finishCourse = remaining_courses.map((value) => value.length === 0)
  
  
  console.log(finishCourse)
  console.log(remaining_courses)