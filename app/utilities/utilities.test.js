import { get_exact_chords, get_all_possible_chords } from './get-possible-chords';
import { get_mode_scales, get_possible_scales, get_all_possible_scales } from './get-possible-scales';import React from 'react';
import Utility from './utility';
import scales_data from '../data/scales';

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
        .toHaveLength(0)
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

describe('utility: get scales', () => {
  describe('retrieving the 7 mode scales', () => {
    it('should return an array of 7 objects',  () => {
      expect(get_mode_scales('E'))
        .toHaveLength(7)
    })
  })
  describe('retrieving all scales', () => {
    it(`should return an array of ${29} objects`,  () => {
      expect(get_all_possible_scales('E'))
        .toHaveLength(29 + 7)
    })

    it(`should not return anything when given Z`,  () => {
      expect(get_all_possible_scales('Z'))
        .toHaveLength(0)
    })
  })
  describe('getting the scales object', () => {
    expect(get_possible_scales('Emaj')['modeScales'].length)
      .toBeGreaterThan(0)
  })
  describe('getting the scales object', () => {
    expect(get_possible_scales('Zmaj')['modeScales'].length)
      .toEqual(0)
  })
})

describe('retrieving a chromatic scale', () => {
  let util = Utility();

  it('returns a single run of notes starting from E', () => {
    expect(util.getChromatic(1, 'E'))
      .toHaveProperty('chromatic', ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"])
  })
  it('returns a single run of laptop notes starting from E', () => {
    expect(util.getChromatic(1, 'E'))
      .toHaveProperty('keyboard_chromatic', ["d", "f", "t", "g", "y", "h", "u", "j", "a", "w", "s", "e"])
  })
})

describe('rendering a string of notes', () => {
  let util = Utility();

  it('renders a full guitar string (23 notes)', () => {
    expect(util.renderString('E'))
      .toHaveLength(23)
  })
  it('renders a string starting at F#', () => {
    expect(util.renderString('F#')[0]['note'])
      .toEqual('F#')
  })
})