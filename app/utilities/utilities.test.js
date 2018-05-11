import { get_exact_chords, get_all_possible_chords } from './get-possible-chords';
import { get_mode_scales, get_all_possible_scales } from './get-possible-scales';import React from 'react';
import { Utility } from './utility';

describe('utility: get chords', () => {
  describe('retrieving an exact chord', () => {
    it('should return one correct chord', () => {
      expect(get_exact_chords(['E','B'])[0])
        .toHaveProperty('name', 'E5')

      expect(get_exact_chords(['E','B']))
        .toHaveLength(1)
    })

    it('should not return any chords', () => {
      expect(get_exact_chords(['E']))
    })
  })

  describe('retrieving all possible chords', () => {
    it('should return several chords', () => {
      expect(get_all_possible_chords(['E','B','A','C','F']))
        .toHaveLength(3)

      expect(get_all_possible_chords(['E','B','A','C','F']))
        .toContainEqual({
          'difference': ['G', 'D'], 
          'name': 'G13', 
          'notes': ['G', 'B', 'D', 'F', 'A', 'C', 'E'], 
          'type': 'thirteenths'
        })
    })
  })
})

describe('utility: get scales', () => {})

describe('retrieving a chromatic scale', () => {})

describe('rendering a string of notes', () => {})

describe('rendering a scale of notes', () => {})