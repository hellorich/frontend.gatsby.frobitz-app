import React from "react"
import renderer from "react-test-renderer"

import Skill from "../Skill/Skill"

describe("Skill", () => {
  it("renders correctly", () => {
    const args = {
      skill: {
        title: 'Test Skill',
        level: 'advanced',
        link: 'https://developer.mozilla.org'
      },
    }
    
    const component = renderer.create(
      // <Skill id="a" title="Test Skill" url="http://developer.mozilla.org" level="advanced" />
      <Skill {...args} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})