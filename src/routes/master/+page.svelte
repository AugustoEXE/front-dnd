<script lang="ts">
import '../../app.css'
import MasterCard from '../../components/MasterCard.svelte'
import master from '$lib/assets/icons/master.png'
import wizard from '$lib/assets/icons/wizard.png'
import sword from '$lib/assets/icons/sword.png'
import goblin from '$lib/assets/icons/goblin.png'
import dragon from '$lib/assets/icons/dragon.png'
import classe from '$lib/assets/icons/classe.png'
import potion from '$lib/assets/icons/potion.png'
import rarity from '$lib/assets/icons/rarity.png'
import runes from '$lib/assets/icons/runes.png'
import proficiency from '$lib/assets/icons/levelup.png'
import armor from '$lib/assets/icons/armor.png'
import school from '$lib/assets/icons/school.png'
import skull from '$lib/assets/icons/skull.png'
import cratureType from '$lib/assets/icons/cratureType.png'
</script>

<div class="w-[98%] m-auto grid grid-cols-5 gap-5 pb-10">
    <div class="col-span-5">
        <p class=" text-center font-ancient text-6xl mt-5 p-0 mb-0">O que deseja fazer?</p>
    </div>

    <div class="row-span-2 grid place-items-center bg-gradient-to-b from-zinc-900 via-zinc-900 to-red-500 hover:scale-105 hover:shadow-2xl transition">
        <img src="{master}" alt="" class="invert scale-90">
        <p class="text-center text-3xl font-bold mb-20">Gerenciar Mesa</p>
    </div>
    
    <MasterCard img={wizard} legend="Feitiço" route={'/forms/spells'}></MasterCard>
    <MasterCard img={sword} legend="Arma" route={''}></MasterCard>
    <MasterCard img={armor} legend="Armadura" route={''}></MasterCard>
    <MasterCard img={goblin} legend="Raça" route={''}></MasterCard>
    <MasterCard img={dragon} legend="Criatura" route={''}></MasterCard>
    <MasterCard img={proficiency} legend="Proficiencia" route={''}></MasterCard>
    <MasterCard img={classe} legend="Classe" route={''}></MasterCard>
    <MasterCard img={potion} legend="Item" route={''}></MasterCard>
    <MasterCard img={runes} legend="Lingua" route={''}></MasterCard>
    <MasterCard img={rarity} legend="Raridade" route={''}></MasterCard>
    <MasterCard img={school} legend="Escola de Magia" route={''}></MasterCard>
    <MasterCard img={skull} legend="Tipo de dado" route={''}></MasterCard>
    <MasterCard img={cratureType} legend="Tipo de Criatura" route={''}></MasterCard>
    
</div>