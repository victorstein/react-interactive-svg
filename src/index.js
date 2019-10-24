import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const SvgParser = (props) => {
  const [childNodes, setChildNodes] = useState([])

  // Wait for ref to exist
  useEffect(() => {
    // Check theres even a child
    if (props.children) {
      if (props.children.ref.current) {
        const child = props.children.ref.current
        // Check that the child node is SVG
        if (child.nodeName !== 'svg') {
          throw new Error('The child must be an svg element')
        }

        // Get al child nodes
        const nodes = child.childNodes
        const nodeIds = []

        // set allowed nodes
        const allowedNodes = ['polygon', 'rect', 'circle']

        // Insert a unique id to all child nodes
        for (const [i, node] of nodes.entries()) {
          if (allowedNodes.includes(node.nodeName)) {
            const nodeId = `svg-node-${i}`
            node.id = nodeId
            nodeIds.push(nodeId)
          }
        }

        setChildNodes(nodeIds)
      }
    }
  }, [props.children])

  // Listen for nodes to be added
  useEffect(() => {
    // onClick Function
    const onElementClicked = async (e) => {
      // set background color of element
      const change = await props.onElementClicked(e)
      if (change) {
        e.target.style.fill = props.activeColor
      }
    }
    // On hover in function
    const onElementHoverIn = (e) => {
      e.target.style.stroke = props.hoverBorderColor
      props.onElementHover(e)
    }
    // On hover out function
    const onElementHoverOut = (e) => {
      e.target.style.stroke = props.defaultHoverBorder
      props.onElementHover(e)
    }
    // add event listeners
    for (const element of childNodes) {
      const node = document.querySelector(`#${element}`)
      node.style.fill = 'transparent'
      node.style.cursor = 'pointer'

      // Set click listener only if prop is received
      if (props.onElementClicked) {
        node.addEventListener('click', onElementClicked)
      }

      // set hover listeners only if porp is received
      if (props.onElementHover) {
        node.addEventListener('mouseover', onElementHoverIn)
        node.addEventListener('mouseout', onElementHoverOut)
      }
    }

    return () => {
      // Remove event listeners
      for (const element of childNodes) {
        const node = document.querySelector(`#${element}`)
        // Set click listener only if prop is received
        if (props.onElementClicked) {
          node.addEventListener('click', onElementClicked)
        }
        if (props.onElementHover) {
          node.removeEventListener('mouseover', onElementHoverIn)
          node.removeEventListener('mouseout', onElementHoverOut)
        }
      }
    }
  }, [childNodes, props])

  return props.children || null
}

SvgParser.defaultProps = {
  hoverBorderColor: '#009cff82',
  defaultHoverBorder: 'black',
  activeColor: '#009cff82'
}

SvgParser.propTypes = {
  onElementHover: PropTypes.func,
  onElementClicked: PropTypes.func,
  hoverBorderColor: PropTypes.string,
  defaultHoverBorder: PropTypes.string,
  activeColor: PropTypes.string,
  children: PropTypes.element.isRequired
}

export default SvgParser
