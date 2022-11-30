import React from 'react'
import { Skill } from 'components/Skill'

export default {
  component: Skill,
  title: 'Skill',
}

const Template = args => <Skill {...args} />

export const Default = Template.bind({})
Default.args = {
  skill: {
    title: 'Test Skill',
    level: 'advanced',
    link: 'https://developer.mozilla.org',
  },
}

export const Basic = Template.bind({})
Basic.args = {
  skill: {
    ...Default.args.skill,
    level: 'basic',
  },
}