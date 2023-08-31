import { useEffect, useState } from "react"

import { ContainerTimeLine } from "./styled"

interface YearGoals {
  year: string,
  goal: string
}

const YearGoals = [
  {
    year: '2018',
    goal: 'Conquista de 2018'
  },
  {
    year: '2019',
    goal: 'Conquista de 2019'
  },
  {
    year: '2020',
    goal: 'Conquista de 2020'
  },
  {
    year: '2021',
    goal: 'Conquista de 2021'
  },
  {
    year: '2022',
    goal: 'Conquista de 2022'
  },
  {
    year: '2023',
    goal: 'Conquista de 2023'
  },
  {
    year: '2024',
    goal: 'Conquista de 2024'
  },
]

export const TimeLine = () => {
  const [yearCountGoals, setYearCountGoals] = useState([{ year: '', goal: '' } satisfies YearGoals])
  
  useEffect(() => {
    setYearCountGoals(YearGoals)
  }, [])

  return (
    <ContainerTimeLine className="container-time-line">
      <div className="container-years">
        {
          yearCountGoals.map((yearGoal) => {
            return <div>{yearGoal.year}</div>
          })
        } 
      </div>

      <div className="time-line">
        {
          yearCountGoals.map(() => {
            return <div className="ball"></div>
          })
        }     
      </div>

      <div className="cards-time-line">
        {
          yearCountGoals.map((yearGoal) => {
            return (
              <div className="card">
                <p>{yearGoal.goal}</p>
              </div>
            )
          })
        }        
      </div>
    </ContainerTimeLine>
  )
}