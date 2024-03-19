'use client'
import { Builder } from '@builder.io/react'
import { Blockquote } from './components/Blockquote'
import { Container } from './components/Container'
import CaseStudyLayout from './app/work/wrapper'
import Counter from './components/Counter/Counter'

Builder.registerComponent(Counter, {
  name: 'Counter',
})

Builder.registerComponent(Blockquote, {
  name: 'Blockquote',
})

Builder.registerComponent(Container, {
  name: 'Container', // Name that will appear in the Builder.io visual editor
 
});

