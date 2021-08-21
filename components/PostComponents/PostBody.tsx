import React from 'react'
import useTheme from 'hooks/useTheme'

interface Props {
  content?: string
}

const PostBody = (props: Props) => {
  const {
    colors: { dark },
    media: { maxSm },
  } = useTheme()
  return (
    <div className="post">
      <p>
        Being a software developer gives you access to a lot of job
        opportunities working at global companies. Part of this opportunity is
        choosing whether to work as a freelancer, an in house employee at
        software-as-a-service company or a software development agency.
      </p>
      <p>
        Many developers dream of landing a job at leading tech companies like
        Google, Facebook, and Microsoft. And who can blame them? Aside from
        gaining work experience, they offer above-average pay and perks like
        long paid parental leaves, free gourmet meals, and paid housing. These
        companies are also known for their tough hiring processes due to high
        competition.
      </p>
      <p>
        While not everyone can scale through their rigorous hiring process, you
        can try sending your applications to product companies with smaller
        teams or find clients to work with on a contract basis. However, you
        will still need to put a lot of work into sending out multiple
        applications and proposals to land a job or gig.
      </p>
      <p>
        Now, if job hunting and sourcing clients directly is not your thing, you
        can always consider working with a software development agency.
      </p>
      <p>Here are some of the benefits of partnering with a seasoned agency:</p>

      <p>Skip the search</p>

      <p>
        Software agencies have a team of people who are assigned various tasks,
        one of which is having a business development representative or sales
        team member responsible for finding clients or projects. Unlike job
        hunting and freelancing, you are not tasked with the burden of finding
        business but can instead focus on delivering quality work on or before
        the deadline.
      </p>

      <p>Get paid sooner</p>

      <p>
        Making sure you’re paid when you deliver your work may be harder when
        freelancing. This is typically not an issue you need to worry about when
        you work at a software agency. While contributing to the growth of your
        agency by bringing in clients is definitely a plus, you’re assured a
        steady paycheck depending on your contract.
      </p>

      <p>Learn new skills</p>

      <p>
        You can learn new things across different industries when working on
        client projects for an agency, such as different languages and
        frameworks. This is a great way to build a portfolio quickly! And you’ll
        have access to senior team members who can teach you what they know
        about development and building your career.
      </p>

      <p>
        Now you know the benefits of working at a software agency, it’s
        important to recognize that not all agencies are created equally. Some
        are notorious for over-working employees because they are understaffed,
        causing burnout. Some are known to pay less with more workload without
        compensating for overtime.
      </p>

      <p>
        We advise you to research some of the top software development agencies
        and compare them based on your personal values. You can narrow them down
        by digging deeper into how they work. Here are a few things to look for:
      </p>

      <ul>
        Read through their blog post for any news update
        <li>Check out their past projects</li>
        <li>Check out their mission and team on their about page</li>
        <li>Look out for any mention of their clientele’s satisfaction</li>
        <li>
          Check out their social media handles to get a sense of their culture
        </li>
        <li>
          Don’t hesitate to send any questions for any clarification before
          indicating your interest in working with them
        </li>
      </ul>

      <style jsx>{`
        .post {
          max-width: 90%;
          @media (${maxSm}) {
            max-width: 100%;
          }
        }
        p {
          margin-bottom: 1.5rem;
        }
        ul {
          list-style-type: none;
          color: ${dark};
          padding-left: 0;
          li {
            margin-left: 1.5rem;
            position: relative;
            &:before {
              content: '';
              position: absolute;
              display: block;
              border-radius: 50%;
              width: 0.5em;
              height: 0.5em;
              left: -1.5em;
              top: 8px;
              background-color: ${dark};
            }
          }
        }
      `}</style>
    </div>
  )
}

export default PostBody
