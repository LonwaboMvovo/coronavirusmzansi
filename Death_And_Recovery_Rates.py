sa_cases = int(input('SA total cases: '))
sa_deaths = int(input('SA deaths: '))
sa_recoveries = int(input('SA recoveries: '))

def percentage_rounded(numerator, denominator):
    return round(numerator / denominator * 100, 2)


print(f'SA death rate => {percentage_rounded(sa_deaths, sa_cases)}')
print(f'SA recovery rate => {percentage_rounded(sa_recoveries, sa_cases)}')

world_cases = int(input('World total cases: '))
world_deaths = int(input('World deaths: '))
world_recoveries = int(input('World recoveries: '))

print(f'World death rate => {percentage_rounded(world_deaths, world_cases)}')
print(f'World recovery rate => {percentage_rounded(world_recoveries, world_cases)}')