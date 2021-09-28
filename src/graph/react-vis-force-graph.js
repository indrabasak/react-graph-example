import React from "react";
import {InteractiveForceGraph, ForceGraphNode, ForceGraphLink} from "react-vis-force";

const ExampleReactVisForce = ({ data, width, height }) => {
  const {nodes, relationships} = data;

  const renderColorForNode = node => {
    return node.siren ? "red" : "blue";
  };

  const findLabel = node => {
    return node.siren ? node.name : node.firstName;
  };

  return (
      <>
      <h3>react-vis-force</h3>
      <div style={{ height, width, border: "1px solid" }}>
        <InteractiveForceGraph
          //simulationOptions={{ height, width}}
          simulationOptions={{
            //animate: true,
            height: height,
            width: width,
            // strength: {
              //   collide: 200
            // },
            radiusMargin: 20
          }}
          //style={{ height, width, border: "1px solid"}}
          zoom
            onSelectNode={(...node) => {
              console.log({ node });
          }}
          //labelAttr='name'
          //labelAttr={findLabel({node})}
        >
          {nodes.map(node => (
            <ForceGraphNode
              key={node.id}
              //node={node}
              node={{id: node.id, name: node.name, radius: 20}}
              fill={renderColorForNode(node)}
              labelStyle={{ margin: "auto", border: "1px solid red" }}
              //labelAttr='name' //doesn't work
              //showLabel
            />
          ))}
          {relationships.map(r => (
            <ForceGraphLink link={{ source: r.fromNode, target: r.toNode, value: 10 }} />
          ))}
        </InteractiveForceGraph>
      </div>
    </>
  );
};

export default ExampleReactVisForce;
