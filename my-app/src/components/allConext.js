import React from "react";

const FirstContextFactory = React.createContext({
    value1: 'this massge come from the father (provider)',
    value2: 'this massge come from the father (provider)'
})

const SucondContextFactory = React.createContext({
    value1: 'value1',
    value2: 'value2'
})

const allContextFacorys = {
    FirstContextFactory: FirstContextFactory,
    SucondContextFactory: SucondContextFactory
}

export default allContextFacorys