import { useEffect, useState } from "react"

import { ContainerTimeLine } from "./styled"

interface YearGoals {
  year: string,
  goal: string
}

const YearGoals = [
  {
    year: '2018',
    goal: `Apesar de já ter interesse em tudo que envolvia computadores,
    meus estudos de forma séria sobre desenvolvimento só começaram em 2018.
    Enquanto fazia Publicidade e Propaganda, estudava HTML, CSS, Algoritmos e Python.`
  },
  {
    year: '2019',
    goal: `Continuei estudando desenvolvimento, mas decidi que queria entrar no
    IFRN de Mossoró, em Técnico em Informática. Acabei entrando no IFRN
    e também em Ciência da Computação na UERN, ao mesmo tempo.`
  },
  {
    year: '2020',
    goal: `Com a pandemia começaram as aulas remotas e percebi que não conseguiria
    cursar a UERN e o IFRN ao mesmo tempo, optei por cursar o IFRN, pensando em voltar
    à UERN assim que terminasse o curso.`
  },
  {
    year: '2021',
    goal: `Os momentos que vivenciei no IFRN, tanto presenciais quanto remotos, foram
    únicos, fiz novos amigos, aprendi bastante sobre desenvolvimento e amadureci também.
    Nesse mesmo ano consegui uma vaga como Jovem Aprendiz em Técnico em Informática em um condomínio.`
  },
  {
    year: '2022',
    goal: `Terminei o IFRN junto com o Jovem Aprendiz. Aprendi muito sobre
    desenvolvimento front-end e back-end. Ajudei muitas pessoas e me tornei o aluno Laureado
    da turma. Infelizmente, por alguns motivos pessoais, não voltei a UERN. Nesse mesmo
    ano, sofri um pequeno acidente que me deixou um pouco incapacitado. Enquanto me recuperava,
    continuei estudando e participei de um desafio de programação com meu professor do IFRN, onde avançamos até a 2ª fase.`
  },
  {
    year: '2023',
    goal: `Me recuperei do acidente, graças a Deus. Agora, mais maduro e sábio, tentei me posicionar
    no mercado, mas sem sucesso. Então fiz alguns esforços e consegui comprar um notebook melhor
    e entrar em Análise e Desenvolvimento de Sistemas na Uninassau. Hoje, concilio faculdade, projetos pessoais
    estudos por cursos a parte e aplicação para vagas de estágio e emprego.`
  },
  {
    year: '2024',
    goal: 'Pretendo já estar inserido no mercado de programação profissionalmente. Se Deus quiser.'
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
            return <div key={yearGoal.year}>{yearGoal.year}</div>
          })
        } 
      </div>

      <div className="time-line">
        {
          yearCountGoals.map((yearGoal) => {
            return <div key={yearGoal.year} className="ball"></div>
          })
        }     
      </div>

      <div className="cards-time-line">
        {
          yearCountGoals.map((yearGoal) => {
            return (
              <div key={yearGoal.year} className="card">
                <p>{yearGoal.goal}</p>
              </div>
            )
          })
        }        
      </div>
    </ContainerTimeLine>
  )
}