import fetch from 'lets-fetch'
import AccountEndpoint from './endpoints/account'
import AchievementsEndpoint from './endpoints/achievements'
import BackstoryEndpoint from './endpoints/backstory'
import BuildEndpoint from './endpoints/build'
import CharactersEndpoint from './endpoints/characters'
import ColorsEndpoint from './endpoints/colors'
import CommerceEndpoint from './endpoints/commerce'
import ContinentsEndpoint from './endpoints/continents'
import CurrenciesEndpoint from './endpoints/currencies'
import EmblemEndpoint from './endpoints/emblem'
import EventsEndpoint from './endpoints/events'
import FilesEndpoint from './endpoints/files'
import FinishersEndpoint from './endpoints/finishers'
import GuildEndpoint from './endpoints/guild'
import ItemsEndpoint from './endpoints/items'
import ItemstatsEndpoint from './endpoints/itemstats'
import LegendsEndpoint from './endpoints/legends'
import MapsEndpoint from './endpoints/maps'
import MasteriesEndpoint from './endpoints/masteries'
import MaterialsEndpoint from './endpoints/materials'
import MinisEndpoint from './endpoints/minis'
import OutfitsEndpoint from './endpoints/outfits'
import PetsEndpoint from './endpoints/pets'
import ProfessionsEndpoint from './endpoints/professions'
import PvpEndpoint from './endpoints/pvp'
import QuaggansEndpoint from './endpoints/quaggans'
import RecipesEndpoint from './endpoints/recipes'
import SkillsEndpoint from './endpoints/skills'
import SkinsEndpoint from './endpoints/skins'
import SpecializationsEndpoint from './endpoints/specializations'
import StoriesEndpoint from './endpoints/stories'
import TitlesEndpoint from './endpoints/titles'
import TokeninfoEndpoint from './endpoints/tokeninfo'
import TraitsEndpoint from './endpoints/traits'
import WorldsEndpoint from './endpoints/worlds'
import WvwEndpoint from './endpoints/wvw'

export default class Client {
  constructor () {
    this.lang = 'en'
    this.apiKey = false
    this.fetch = fetch
  }

  // Set the language for locale-aware endpoints
  language (lang) {
    this.lang = lang
    return this
  }

  // Set the api key for authenticated endpoints
  authenticate (apiKey) {
    this.apiKey = apiKey
    return this
  }

  account () {
    return new AccountEndpoint(this)
  }

  // All the different API endpoints
  achievements () {
    return new AchievementsEndpoint(this)
  }

  backstory () {
    return new BackstoryEndpoint(this)
  }

  build () {
    return new BuildEndpoint(this)
  }

  characters (name) {
    return new CharactersEndpoint(this, name)
  }

  colors () {
    return new ColorsEndpoint(this)
  }

  commerce () {
    return new CommerceEndpoint(this)
  }

  continents () {
    return new ContinentsEndpoint(this)
  }

  currencies () {
    return new CurrenciesEndpoint(this)
  }

  emblem () {
    return new EmblemEndpoint(this)
  }

  events () {
    return new EventsEndpoint(this)
  }

  files () {
    return new FilesEndpoint(this)
  }

  finishers () {
    return new FinishersEndpoint(this)
  }

  guild (id) {
    return new GuildEndpoint(this, id)
  }

  items () {
    return new ItemsEndpoint(this)
  }

  itemstats () {
    return new ItemstatsEndpoint(this)
  }

  legends () {
    return new LegendsEndpoint(this)
  }

  maps () {
    return new MapsEndpoint(this)
  }

  masteries () {
    return new MasteriesEndpoint(this)
  }

  materials () {
    return new MaterialsEndpoint(this)
  }

  minis () {
    return new MinisEndpoint(this)
  }

  outfits () {
    return new OutfitsEndpoint(this)
  }

  pets () {
    return new PetsEndpoint(this)
  }

  professions () {
    return new ProfessionsEndpoint(this)
  }

  pvp () {
    return new PvpEndpoint(this)
  }

  quaggans () {
    return new QuaggansEndpoint(this)
  }

  recipes () {
    return new RecipesEndpoint(this)
  }

  skills () {
    return new SkillsEndpoint(this)
  }

  skins () {
    return new SkinsEndpoint(this)
  }

  specializations () {
    return new SpecializationsEndpoint(this)
  }

  stories () {
    return new StoriesEndpoint(this)
  }

  titles () {
    return new TitlesEndpoint(this)
  }

  tokeninfo () {
    return new TokeninfoEndpoint(this)
  }

  traits () {
    return new TraitsEndpoint(this)
  }

  worlds () {
    return new WorldsEndpoint(this)
  }

  wvw () {
    return new WvwEndpoint(this)
  }
}
